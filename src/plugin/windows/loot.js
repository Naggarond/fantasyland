import { decodeCp1251Response } from '../utils/cp1251.js';

const lootBody = document.getElementById('lootBody');

const itemCache = {
  '0': {
    name: 'Gold',
    image: 'https://www.fantasyland.ru/images/miscellaneous/line_gold.gif',
    price: '1'
  }
};

async function fetchItemDetails(itemId) {
  if (itemCache[itemId]) {
    return itemCache[itemId];
  }

  const cacheKey = `item_cache_${itemId}`;
  const storageResult = await chrome.storage.local.get(cacheKey);
  if (storageResult[cacheKey]) {
    itemCache[itemId] = storageResult[cacheKey];
    return itemCache[itemId];
  }

  try {
    const response = await fetch(`https://www.fantasyland.ru/cgi/item_desc.php?id=${itemId}`);
    const text = await decodeCp1251Response(response);

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    
    // Extract name from title
    let name = doc.title || doc.querySelector('b')?.textContent || `Item ${itemId}`;
    name = name.replace(/\u00A0/g, ' ').trim();
    
    // Extract image by finding the item image
    let imageNode = Array.from(doc.querySelectorAll('img')).find(img => {
      const src = img.getAttribute('src') || '';
      return src && 
             !src.includes('/borders/') && 
             !src.includes('/buttons/') &&
             !src.includes('money.gif') &&
             !src.includes('_c.gif') && // e.g. defence_c.gif
             !src.includes('intelligence.gif') &&
             !src.includes('strength.gif') &&
             !src.includes('dexterity.gif') &&
             !src.includes('intuition.gif') &&
             !src.includes('hp.gif') &&
             !src.includes('mp.gif') &&
             !src.includes('e_plus.gif');
    }) || doc.querySelector('img');
    
    let imageSrc = imageNode?.getAttribute('src') || '';
    if (imageSrc && !imageSrc.startsWith('http')) {
      imageSrc = `https://www.fantasyland.ru${imageSrc.startsWith('/') ? '' : '/'}${imageSrc}`;
    }
    
    // Extract price
    let price = '0';
    const priceMatch = text.match(/Цена:[\s\S]*?<b>(\d+)<\/b>/i) ||
                       text.match(/Цена(?:<[^>]+>|\s)*[:]*\s*(\d+)/i) || 
                       text.match(/(\d+)\s*(?:зол|сер|мед)/i) ||
                       text.match(/Цена[\s\S]*?(\d+)/i);
    if (priceMatch && priceMatch[1]) {
      price = priceMatch[1];
    }

    const itemDetails = { name, image: imageSrc, price };
    
    itemCache[itemId] = itemDetails;
    chrome.storage.local.set({ [cacheKey]: itemDetails });

    return itemDetails;
  } catch (err) {
    console.error(`Failed to fetch details for item ${itemId}`, err);
    return { name: `Item ${itemId}`, image: '', price: '0' };
  }
}

let currentRenderId = 0;

function renderTable(basket = 'current') {
  currentRenderId++;
  const thisRenderId = currentRenderId;

  lootBody.innerHTML = '';
  document.getElementById('grandTotal').textContent = '0 Gold';

  chrome.runtime.sendMessage({ type: 'getItems', basket }, async (response) => {
    if (thisRenderId !== currentRenderId) return;

    if (!response || !response.items) {
      console.error('Failed to receive items from background');
      return;
    }

    let grandTotal = 0;
    const grandTotalElement = document.getElementById('grandTotal');

    for (const item of response.items) {
      if (thisRenderId !== currentRenderId) return;

      const tr = document.createElement('tr');
      // Create empty cells first to show loading state
      const selectHtml = basket === 'current' ? `<td><input type="checkbox" class="item-checkbox" value="${item.id}" checked></td>` : `<td></td>`;
      tr.innerHTML = `
        ${selectHtml}
        <td>${item.id}</td>
        <td>Loading...</td>
        <td>Loading...</td>
        <td>${item.amount}</td>
        <td>...</td>
        <td>...</td>
      `;
      lootBody.appendChild(tr);

      const details = await fetchItemDetails(item.id);
      
      if (thisRenderId !== currentRenderId) return;
      
      const priceVal = parseInt(details.price) || 0;
      const amountVal = parseInt(item.amount) || 0;
      const rowTotal = priceVal * amountVal;

      grandTotal += rowTotal;
      if (grandTotalElement) {
        grandTotalElement.textContent = `${grandTotal} Gold`;
      }

      tr.innerHTML = `
        ${selectHtml}
        <td>${item.id}</td>
        <td>${details.image ? `<img src="${details.image}" alt="${details.name}" style="max-width: 50px; max-height: 50px;" />` : 'No Image'}</td>
        <td>${details.name}</td>
        <td>${item.amount}</td>
        <td>${details.price}</td>
        <td>${rowTotal}</td>
      `;
    }
  });
}

function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  const clearCurrentBtn = document.getElementById('clearCurrentBtn');
  const moveToHistoryBtn = document.getElementById('moveToHistoryBtn');

  let currentBasket = 'current';

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      currentBasket = tab.dataset.tab;
      
      if (currentBasket === 'history') {
        clearHistoryBtn.style.display = 'inline-block';
        clearCurrentBtn.style.display = 'none';
        moveToHistoryBtn.style.display = 'none';
      } else {
        clearHistoryBtn.style.display = 'none';
        clearCurrentBtn.style.display = 'inline-block';
        moveToHistoryBtn.style.display = 'inline-block';
      }

      renderTable(currentBasket);
    });
  });

  clearCurrentBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear current loot?')) {
      chrome.runtime.sendMessage({ type: 'clearCurrent' }, () => renderTable(currentBasket));
    }
  });

  clearHistoryBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear history loot?')) {
      chrome.runtime.sendMessage({ type: 'clearHistory' }, () => renderTable(currentBasket));
    }
  });

  moveToHistoryBtn.addEventListener('click', () => {
    const checkedBoxes = Array.from(document.querySelectorAll('.item-checkbox:checked'));
    if (checkedBoxes.length === 0) {
      alert('No items selected to move.');
      return;
    }

    if (confirm(`Move ${checkedBoxes.length} selected items to history?`)) {
      const itemsToMove = checkedBoxes.map(cb => cb.value);
      chrome.runtime.sendMessage({ type: 'moveToHistory', itemsToMove }, () => renderTable(currentBasket));
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderTable('current');
});
