console.log('background js')

let store = {};
let _lastUpdate = null;

let player_items = null;

chrome.storage.local.get('Loot').then((result) => {
  if (result.Loot) {
    store = result.Loot;

    console.log('store loaded', store)
  }
});

const storeLoot = function() {
  chrome.storage.local.set({ Loot: store })
    .then(() => {
    });
}

chrome.runtime.onInstalled.addListener(({ reason }) => {
  console.log('reason', reason)
  if (reason === 'install') {
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('message', { message, sender, sendResponse })
  if (message.type === 'addItems') {
    if (store[message.itemId] === undefined) {
      store[message.itemId] = 0;
    }
    store[message.itemId] += message.amount;

    storeLoot();
    console.log('store', store)
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