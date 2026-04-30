console.log('background js')

let _lastUpdate = null;

let player_items = null;

// It's better to manage storage asynchronously in Manifest V3 Service Workers
// as they restart frequently. We remove the global `let store = {}` sync cache
// to prevent race conditions.

chrome.runtime.onInstalled.addListener(({ reason }) => {
  console.log('reason', reason)
  if (reason === 'install') {
  }

  // Setup declarative content to only show action on fantasyland.ru
  chrome.action.disable();
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    let rule = {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostSuffix: 'fantasyland.ru' },
        })
      ],
      actions: [ new chrome.declarativeContent.ShowAction() ],
    };
    chrome.declarativeContent.onPageChanged.addRules([rule]);
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('message', { message, sender, sendResponse })
  if (message.type === 'addItems') {
    chrome.storage.local.get('Loot').then((result) => {
      const currentStore = result.Loot || {};
      if (currentStore[message.itemId] === undefined) {
        currentStore[message.itemId] = 0;
      }
      currentStore[message.itemId] += message.amount;

      chrome.storage.local.set({ Loot: currentStore }).then(() => {
        console.log('saved store', currentStore);
      });
    });
    return true; // We don't strictly need to return true if we don't send a response, but it's safe.
  } else if (message.type === 'requestAmountOfItems') {
    getYourItems().then(items => {
      const answer = {};
      message.items.forEach(item_id => {
        answer[item_id] = items[item_id]?.count || 0;
      });

      sendResponse(answer);
    });

    return true;
  } else if (message.type === 'refresh-items') {
    loadYourItems();
    
    return true;
  } else if (message.type === 'getItems') {
    chrome.storage.local.get('Loot').then((result) => {
      const currentStore = result.Loot || {};
      const items = [];
      Object.keys(currentStore).forEach(key => {
        items.push({
          id: key,
          amount: currentStore[key]
        });
      });

      sendResponse({
        items
      });
    });
    
    return true; // Important: tells Chrome that sendResponse will be called asynchronously
  }
});


export function parseInventory(str) {
  const map = {}

  // Regex for InvItemShow(...)
  const re =
    /InvItemShow\(\s*'([^']+?)'\s*,\s*'([\s\S]*?)'\s*,\s*(\d+)\s*,\s*(\d+)/g

  let m

  while ((m = re.exec(str))) {
    const [, img, html, countStr, idStr] = m
    const id = Number(idStr)
    const count = Number(countStr)

    // Extract name from <b>...</b>
    const nameMatch = html.match(/<b>(.*?)<\/b>/)
    const name = nameMatch?.[1] ?? 'UNKNOWN'

    map[id] = {
      id,
      name,
      img,
      count,
      // rawHtml: html,
    }
  }

  return map
}


function loadYourItems() {
  return new Promise((resolve) => {
    fetch('https://www.fantasyland.ru/cgi/inv_load_items.php?all&dv=d1777').then(async response => {
      const buf = await response.arrayBuffer();
      const text = new TextDecoder("windows-1251").decode(buf);

      player_items = parseInventory(text);

      resolve(player_items);
    });
  });
}

async function getYourItems() {
  if (player_items) {
    return player_items;
  }

  return await loadYourItems();
}

const items_stats = true;
if (items_stats) {
  loadYourItems();
}