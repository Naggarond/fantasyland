const input = document.getElementById("item-name");
const button = document.getElementById("search-btn");
const result = document.getElementById("result");
const selectedPanel = document.getElementById("selected-panel");
const selectedItemNameEl = document.getElementById("selected-item-name");

let selectedItem = null;
let itemShops = [];

function encodeToCP1251(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 1040 && charCode <= 1103) {
      // Cyrillic А-Я, а-я
      result += '%' + (charCode - 848).toString(16).toUpperCase();
    } else if (charCode === 1025) { 
      // Ё
      result += '%A8';
    } else if (charCode === 1105) { 
      // ё
      result += '%B8';
    } else {
      // Regular ASCII and others
      result += encodeURIComponent(str.charAt(i));
    }
  }
  return result;
}

async function loadShopsForItem(itemId) {
  if (!itemId || itemId === "?") return;

  const url = `https://www.fantasyland.ru/cgi/v_trade_show_shops.php?id=${itemId}&t=1`;
  try {
    const response = await fetch(url, { method: "GET" });
    const buffer = await response.arrayBuffer();
    const decoder = new TextDecoder('windows-1251');
    const text = decoder.decode(buffer);

    // Matches the string assigned to innerHTML: ge('hl22750').innerHTML = '...'
    const match = text.match(/\.innerHTML\s*=\s*'((?:\\'|[^'])*)'/);
    if (!match) {
      console.warn("Shops string not found in response.");
      itemShops = [];
      return;
    }

    let htmlContent = match[1].replace(/\\'/g, "'");

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    const shops = [];
    const links = doc.querySelectorAll('a[href^="v_trade_load_shop.php"]');
    
    for (const link of links) {
      const href = link.getAttribute('href');
      const shopIdMatch = href.match(/[?&]id=(\d+)/i);
      const shopId = shopIdMatch ? shopIdMatch[1] : null;
      const shopName = link.textContent.trim();

      let quantity = 0;
      let nextElem = link.nextElementSibling;
      if (nextElem && nextElem.tagName.toLowerCase() === "span" && nextElem.getAttribute("title") === "Количество") {
        quantity = parseInt(nextElem.textContent.trim() || "0", 10);
      } else {
         // sometimes quantity span is inside brackets text node, search next sibling
         let node = link.nextSibling;
         while (node) {
           if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === "span" && node.getAttribute("title") === "Количество") {
             quantity = parseInt(node.textContent.trim() || "0", 10);
             break;
           }
           node = node.nextSibling;
         }
      }

      if (shopId) {
        shops.push({
          shopId,
          shopName,
          quantity,
          loaded: false
        });
      }
    }

    // Now for each shop, load its inventory and purchasing data
    for (const shop of shops) {
      try {
        const inventoryData = await fetchAndParseShopInventory(shop.shopId);
        shop.inventory = inventoryData.items;

        let purchasing = [];
        if (inventoryData.purchasingId) {
          purchasing = await fetchAndParseShopPurchasing(inventoryData.purchasingId);
        }
        
        shop.purchasing = purchasing;
        shop.loaded = true;
      } catch (err) {
        console.error(`Failed to load data for shop ${shop.shopId}:`, err);
      }
      
      // Wait a short moment between requests to avoid spamming the server
      await new Promise(r => setTimeout(r, 100));
    }

    itemShops = shops;
    console.log("Loaded shops with inventory details:", itemShops);
    renderShopsTables(itemShops);
  } catch (e) {
    console.error("Error loading shops:", e);
    itemShops = [];
  }
}

function renderShopsTables(shops) {
  let container = document.getElementById("shops-tables-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "shops-tables-container";
    selectedPanel.appendChild(container);
  }
  container.innerHTML = "";

  if (!shops || shops.length === 0) {
    container.innerHTML = "<p>Нет магазинов с данным товаром.</p>";
    return;
  }

  // --- Сводка по выбранному товару ---
  const currentItemId = selectedItem ? selectedItem.id : null;
  const combinedSummary = [];

  if (currentItemId) {
    shops.forEach(shop => {
      let saleQty = null;
      let salePrice = null;
      let buyQty = null;
      let buyPrice = null;
      let hasData = false;

      // Ищем товар в продаже магазина
      if (shop.inventory) {
        const itemSale = shop.inventory.find(i => i.itemId === currentItemId);
        if (itemSale) {
          saleQty = itemSale.quantity;
          salePrice = itemSale.price;
          if (itemSale.priceFor10 !== null && itemSale.priceFor10 !== undefined) {
             salePrice += ` (${itemSale.priceFor10})`;
          }
          hasData = true;
        }
      }
      // Ищем товар в скупке магазина
      if (shop.purchasing) {
        const itemBuy = shop.purchasing.find(i => i.itemId === currentItemId);
        if (itemBuy) {
          buyQty = itemBuy.maxQuantityAccepting;
          buyPrice = itemBuy.buyPrice;
          if (itemBuy.buyPriceFor10 !== null) {
             buyPrice += ` (${itemBuy.buyPriceFor10})`;
          }
          hasData = true;
        }
      }

      if (hasData) {
        combinedSummary.push({
          shopId: shop.shopId,
          shopName: shop.shopName,
          saleQty, 
          salePrice,
          buyQty, 
          buyPrice
        });
      }
    });
  }

  // Сортировка: 먼저 по самой дешёвой цене продажи, если нет - по самой дорогой скупке
  combinedSummary.sort((a, b) => {
     let pA = Infinity, pB = Infinity, bA = -Infinity, bB = -Infinity;

     if (a.salePrice) pA = parseFloat(a.salePrice.toString().split(' ')[0]);
     if (b.salePrice) pB = parseFloat(b.salePrice.toString().split(' ')[0]);
     
     if (a.buyPrice) bA = parseFloat(a.buyPrice.toString().split(' ')[0]);
     if (b.buyPrice) bB = parseFloat(b.buyPrice.toString().split(' ')[0]);

     if (pA !== pB) return pA - pB;
     return bB - bA;
  });

  const summaryDiv = document.createElement("div");
  summaryDiv.style.border = "2px solid #8ab4f8";
  summaryDiv.style.padding = "12px";
  summaryDiv.style.marginBottom = "20px";
  summaryDiv.style.borderRadius = "6px";
  summaryDiv.style.backgroundColor = "#fafcfd";

  summaryDiv.innerHTML = `<h2 style="margin-top: 0; color: #333;">Сводка: ${selectedItem ? selectedItem.name : "Выбранный товар"}</h2>`;

  if (combinedSummary.length === 0) {
    summaryDiv.innerHTML += "<p>Товар не найден в ассортименте этих магазинов (возможно, закончился).</p>";
  } else {
    let summaryHtml = `
      <table style="width: 100%; border-collapse: collapse; margin-top: 1em; background-color: #fdfdfd;">
        <thead>
          <tr style="background-color: #e8f4f8;">
            <th style="border: 1px solid #ccc; padding: 4px; text-align: left;">Магазин</th>
            <th style="border: 1px solid #ccc; padding: 4px; text-align: center;">В продаже (шт)</th>
            <th style="border: 1px solid #ccc; padding: 4px; text-align: center;">Цена витрины</th>
            <th style="border: 1px solid #ccc; padding: 4px; text-align: center;">Скупают (шт)</th>
            <th style="border: 1px solid #ccc; padding: 4px; text-align: center;">Цена скупки</th>
          </tr>
        </thead>
        <tbody>
    `;

    combinedSummary.forEach(item => {
      summaryHtml += `
        <tr>
          <td style="border: 1px solid #ccc; padding: 4px;">
            <a href="https://www.fantasyland.ru/cgi/v_trade_load_shop.php?id=${item.shopId}" target="_blank">${item.shopName}</a>
          </td>
          <td style="border: 1px solid #ccc; padding: 4px; text-align: center;">${item.saleQty !== null ? item.saleQty : "-"}</td>
          <td style="border: 1px solid #ccc; padding: 4px; text-align: center; font-weight: bold; color: #0066cc;">${item.salePrice !== null ? item.salePrice : "-"}</td>
          <td style="border: 1px solid #ccc; padding: 4px; text-align: center;">${item.buyQty !== null ? item.buyQty : "-"}</td>
          <td style="border: 1px solid #ccc; padding: 4px; text-align: center; font-weight: bold; color: #008000;">${item.buyPrice !== null ? item.buyPrice : "-"}</td>
        </tr>
      `;
    });

    summaryHtml += `</tbody></table>`;
    summaryDiv.innerHTML += summaryHtml;
  }

  container.appendChild(summaryDiv);
  // --- Конец сводки ---

  const generateTable = (title, items, isBuy) => {
    if (!items || items.length === 0) return "";
    let html = `<h4>${title}</h4>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1em;">
        <thead>
          <tr style="background-color: #eee;">
            <th style="border: 1px solid #ccc; padding: 4px;">Картинка</th>
            <th style="border: 1px solid #ccc; padding: 4px;">Название</th>
            <th style="border: 1px solid #ccc; padding: 4px;">Кол-во</th>
            <th style="border: 1px solid #ccc; padding: 4px;">Цена</th>
          </tr>
        </thead>
        <tbody>
    `;

    items.forEach(item => {
      const quantity = isBuy ? item.maxQuantityAccepting : item.quantity;
      let priceStr = isBuy ? item.buyPrice : item.price;
      
      const priceFor10 = isBuy ? item.buyPriceFor10 : item.priceFor10;
      if (priceFor10 !== null && priceFor10 !== undefined) {
         priceStr += ` (${priceFor10})`;
      }

      const imgSrc = item.image && !item.image.startsWith('http') 
        ? `https://www.fantasyland.ru${item.image.replace('..', '')}` 
        : item.image;

      html += `
        <tr>
          <td style="border: 1px solid #ccc; padding: 4px; text-align: center;">
            ${imgSrc ? `<img src="${imgSrc}" style="max-height: 24px;" alt="">` : ""}
          </td>
          <td style="border: 1px solid #ccc; padding: 4px;">${item.name || ""}</td>
          <td style="border: 1px solid #ccc; padding: 4px; text-align: center;">${quantity !== null ? quantity : "-"}</td>
          <td style="border: 1px solid #ccc; padding: 4px; text-align: center;">${priceStr !== null ? priceStr : "-"}</td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
    return html;
  };

  shops.forEach(shop => {
    const shopDiv = document.createElement("div");
    shopDiv.style.border = "1px solid #aaa";
    shopDiv.style.padding = "8px";
    shopDiv.style.marginBottom = "12px";
    shopDiv.style.borderRadius = "4px";

    shopDiv.innerHTML = `<h3>Магазин: <a href="https://www.fantasyland.ru/cgi/v_trade_load_shop.php?id=${shop.shopId}" target="_blank">${shop.shopName}</a> (Общ. кол-во: ${shop.quantity})</h3>`;

    const inventoryHtml = generateTable("В продаже", shop.inventory, false);
    const purchasingHtml = generateTable("Отдел покупок (Скупка)", shop.purchasing, true);

    if (inventoryHtml) shopDiv.innerHTML += inventoryHtml;
    if (purchasingHtml) shopDiv.innerHTML += purchasingHtml;
    
    if (!inventoryHtml && !purchasingHtml) {
      shopDiv.innerHTML += "<p>Нет подробных данных</p>";
    }

    container.appendChild(shopDiv);
  });
}

async function fetchAndParseShopInventory(shopId) {
  const url = `https://www.fantasyland.ru/cgi/v_trade_load_shop.php?id=${shopId}`;
  try {
    const response = await fetch(url, { method: "GET" });
    const buffer = await response.arrayBuffer();
    const decoder = new TextDecoder('windows-1251');
    const text = decoder.decode(buffer);

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const items = [];

    // Extract the exact shop ID that the purchasing department uses
    let purchasingId = shopId;
    const pBtn = doc.querySelector('button[onclick*="v_trade_show_goods_for_sale.php?id="]');
    if (pBtn && pBtn.getAttribute('onclick')) {
      const matchBtn = pBtn.getAttribute('onclick').match(/id=(\d+)/);
      if (matchBtn) purchasingId = matchBtn[1];
    } else {
      const matchText = text.match(/v_trade_show_goods_for_sale\.php\?id=(\d+)/);
      if (matchText) purchasingId = matchText[1];
    }

    // Find all forms that buy from shop
    const forms = doc.querySelectorAll('form[action="buy.php"]');
    for (const form of forms) {
      const goodIdInput = form.querySelector('input[name="good_id"]');
      if (!goodIdInput) continue;
      const itemId = goodIdInput.value;
      
      const tr = form.closest('tr');
      if (!tr) continue;

      const tds = tr.children;
      if (tds.length < 3) continue;

      // Extract image and name
      const img = tds[0].querySelector('img');
      const image = img ? img.getAttribute('src') : null;

      // Extract quantity, name, level, stats
      const infoTd = tds[1];
      
      let quantity = null;
      let name = null;
      const nameMatch = infoTd.textContent.match(/[\(\[](\d+)[\)\]]\s*(.+)/);
      if (nameMatch) {
         quantity = parseInt(nameMatch[1], 10);
         name = nameMatch[2].trim();
      }

      let level = null;
      const levelMatch = infoTd.textContent.match(/Уровень:\s*(\d+)/);
      if (levelMatch) {
         level = parseInt(levelMatch[1], 10);
      }

      const stats = {};
      const statRows = infoTd.querySelectorAll('.table4 tr');
      for (const statRow of statRows) {
         const statText = statRow.textContent.trim();
         if (statText && !statText.startsWith("Нужно:")) {
            const imgEl = statRow.querySelector('img');
            const statName = imgEl ? (imgEl.getAttribute('alt') || imgEl.getAttribute('title')) : null;
            if (statName) {
               const valMatch = statText.match(/[-+]?\d+/);
               if (valMatch) {
                  stats[statName] = parseInt(valMatch[0], 10);
               }
            }
         }
      }

      // Extract price
      let price = null;
      let priceFor10 = null;
      const numInput = form.querySelector('input[name="number"]');
      if (numInput) {
        const onKeyUp = numInput.getAttribute('onkeyup') || numInput.getAttribute('onKeyUp');
        if (onKeyUp) {
          const m = onKeyUp.match(/chg_price\(\s*\d+\s*,\s*([\d\.]+)/);
          if (m) price = parseFloat(m[1]);
        }
      }
      
      const priceDiv = tds[2].querySelector(`div[id="d${itemId}"]`) || form.parentElement.querySelector(`div[id="d${itemId}"]`);
      if (price === null && priceDiv) {
         const priceMatch = priceDiv.textContent.replace(',', '.').match(/[\d\.]+/);
         if (priceMatch) price = parseFloat(priceMatch[0]);
      }
      if (priceDiv && priceDiv.textContent.includes('(')) {
         const p10Match = priceDiv.textContent.match(/\(([\d\.]+)\)/);
         if (p10Match) priceFor10 = parseFloat(p10Match[1]);
      }

      items.push({
         itemId,
         name,
         quantity,
         price,
         priceFor10,
         image,
         level,
         stats
      });
    }

    return { items, purchasingId };
  } catch (e) {
    console.error("Error loading shop inventory:", e);
    return { items: [], purchasingId: null };
  }
}

async function fetchAndParseShopPurchasing(shopId) {
  const url = `https://www.fantasyland.ru/cgi/v_trade_show_goods_for_sale.php?id=${shopId}`;
  try {
    const response = await fetch(url, { method: "GET" });
    const buffer = await response.arrayBuffer();
    const decoder = new TextDecoder('windows-1251');
    const text = decoder.decode(buffer);

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const items = [];

    // Fallback if parsing fails or returns 0
    let parsedCount = 0;

    debugger
    // Find all forms that sell to shop
    const forms = doc.querySelectorAll('form[action*="sell_good_to_shop"]');
    for (const form of forms) {
      const goodIdInput = form.querySelector('input[name="good_id"]');
      if (!goodIdInput) continue;
      const itemId = goodIdInput.value;
      
      let tr = form.closest('tr');
      // Sometimes the parser might bump it up levels
      while (tr && tr.children.length < 3 && tr.parentElement) {
          tr = tr.parentElement.closest('tr');
      }
      
      if (!tr || tr.children.length < 3) {
         // Try to find the tr manually by querying up differently, but table1 row usually has 3 tds
         continue;
      }

      const tds = tr.children;
      
      // Extract image
      const img = tds[0].querySelector('img');
      const image = img ? img.getAttribute('src') : null;

      // Extract quantity (player stock), name, level, stats
      const infoTd = tds[1];
      
      let playerStock = null;
      let name = null;
      const nameMatch = infoTd.textContent.match(/[\(\[](\d+)[\)\]]\s*(.+)/);
      if (nameMatch) {
         playerStock = parseInt(nameMatch[1], 10); // В [] указан инвентарь игрока
         name = nameMatch[2].trim();
      }

      let level = null;
      const levelMatch = infoTd.textContent.match(/Уровень:\s*(\d+)/);
      if (levelMatch) {
         level = parseInt(levelMatch[1], 10);
      }

      const stats = {};
      const statRows = infoTd.querySelectorAll('.table4 tr');
      for (const statRow of statRows) {
         const statText = statRow.textContent.trim();
         if (statText && !statText.startsWith("Нужно:")) {
            const imgEl = statRow.querySelector('img');
            const statName = imgEl ? (imgEl.getAttribute('alt') || imgEl.getAttribute('title')) : null;
            if (statName) {
               const valMatch = statText.match(/[-+]?\d+/);
               if (valMatch) {
                  stats[statName] = parseInt(valMatch[0], 10);
               }
            }
         }
      }

      // Extract buyPrice
      let buyPrice = null;
      let buyPriceFor10 = null;
      const numInput = form.querySelector('input[name="number"]');
      if (numInput) {
        const onKeyUp = numInput.getAttribute('onkeyup') || numInput.getAttribute('onKeyUp') || '';
        // Например: chg_price2( "22200", 11.15 )
        const m = onKeyUp.match(/chg_price2?[^,]+,\s*([\d\.]+)/);
        if (m) buyPrice = parseFloat(m[1]);
      }

      // Try finding the div within the same row first, else fallback to global search
      let priceDiv = tds[2] ? (tds[2].querySelector(`div[id="d${itemId}"]`) || tds[2].querySelector(`div[name="d${itemId}"]`)) : null;
      if (!priceDiv) {
         priceDiv = form.parentElement ? (form.parentElement.querySelector(`div[id="d${itemId}"]`) || form.parentElement.querySelector(`div[name="d${itemId}"]`)) : null;
      }
      if (!priceDiv) {
         priceDiv = doc.querySelector(`div[id="d${itemId}"], div[name="d${itemId}"]`);
      }

      if (buyPrice === null && priceDiv) {
         const priceMatch = priceDiv.textContent.replace(',', '.').match(/[\d\.]+/);
         if (priceMatch) buyPrice = parseFloat(priceMatch[0]);
      }
      if (priceDiv && priceDiv.textContent.includes('(')) {
         const p10Match = priceDiv.textContent.match(/\(([\d\.]+)\)/);
         if (p10Match) buyPriceFor10 = parseFloat(p10Match[1]);
      }

      items.push({
         itemId,
         name,
         playerStock,           // inventory of the player making the request
         maxQuantityAccepting: "∞", // We don't see the shop's limit here
         buyPrice,
         buyPriceFor10,
         image,
         level,
         stats
      });
      parsedCount++;
    }

    // Secondary Regex Fallback just in case DOMParser mangled the table
    if (parsedCount === 0) {
      const rx = /<td>\s*<img[^>]*src=[\"']([^"']+)[^>]*>\s*<\/td>\s*<td>\s*\[(\d+)\][^<]*<b>([^<]+)<\/b>[\s\S]*?<div[^>]*name=d(\d+)[^>]*>([\d\.]+)(?:\s*\(([\d\.]+)\))?[\s\S]*?<form[^>]*action=["']sell_good_to_shop[^>]*>[\s\S]*?<input[^>]*onKeyUp=['"]chg_price2?[^,]+,\s*([\d\.]+)/gi;
      let m;
      while ((m = rx.exec(text)) !== null) {
        const image = m[1];
        const playerStock = parseInt(m[2], 10);
        const name = m[3].trim();
        const itemId = m[4];
        let buyPrice = parseFloat(m[7] || m[5]);
        let buyPriceFor10 = m[6] ? parseFloat(m[6]) : null;

        items.push({
          itemId, name, playerStock, maxQuantityAccepting: "∞", buyPrice, buyPriceFor10, image, level: null, stats: {}
        });
      }
    }

    return items;
  } catch (e) {
    debugger
    console.error("Error loading shop purchasing data:", e);
    return [];
  }
}

async function searchMarket() {
  const value = (input.value || "").trim();
  if (!value) {
    result.textContent = "Введите название предмета.";
    return;
  }

  // Use CP1251 encoding instead of UTF-8 encodeURIComponent
  const url = `https://www.fantasyland.ru/cgi/v_trade_search.php?item_name=${encodeToCP1251(value)}`;
  result.textContent = "Загрузка...";

  try {
    const response = await fetch(url, { method: "GET" });
    
    // Read as ArrayBuffer and decode from windows-1251
    const buffer = await response.arrayBuffer();
    const decoder = new TextDecoder('windows-1251');
    const text = decoder.decode(buffer);

    console.log(text)
    
    // Parse the HTML string into a DOM Document
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    // Clear previous results
    result.textContent = "";

    // Parse table rows
    const rows = Array.from(doc.querySelectorAll("table tr"));

    if (rows.length === 0) {
      result.textContent = "Таблица с предметами не найдена.";
      console.log("Распарсенный HTML:", doc.body.innerHTML);
      return;
    }

    // Create a list for further selection
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    ul.style.padding = "0";

    rows.forEach((row) => {
      const cells = Array.from(row.querySelectorAll("td, th"));
      if (cells.length === 0) return;

      const rowData = cells.map(cell => cell.textContent.trim()).filter(Boolean);
      if (rowData.length === 0) return;

      const li = document.createElement("li");
      li.style.padding = "6px";
      li.style.borderBottom = "1px solid #ccc";
      
      const itemName = rowData[0] || "Unknown";
      
      // Check if this row is a header by looking for <th> elements
      const isHeader = row.querySelector("th") !== null;

      let imgSrc = "";
      let itemId = "?";

      if (isHeader) {
        li.textContent = rowData.join(" | ");
      } else {
        const imgNode = row.querySelector("img");
        imgSrc = imgNode ? imgNode.getAttribute("src") : "";
        if (imgSrc && !imgSrc.startsWith("http")) {
          imgSrc = new URL(imgSrc, "https://www.fantasyland.ru/cgi/").href;
        }

        const idMatch = row.innerHTML.match(/[?&]id=(\d+)/i) || row.innerHTML.match(/good_id['"]?\s*value=['"]?(\d+)/i);
        if (idMatch) itemId = idMatch[1];
        
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "8px";

        li.innerHTML = `
          ${imgSrc ? `<img src="${imgSrc}" style="max-height: 24px;">` : '<span>Нет картинки</span>'}
          <span>|</span>
          <span>${itemName}</span>
          <span>|</span>
          <span>ID: ${itemId}</span>
        `;
      }
      
      if (!isHeader) {
        li.style.cursor = "pointer";
        li.addEventListener("click", () => {
          console.log("Выбран предмет:", itemName);

          selectedItem = { image: imgSrc, name: itemName, id: itemId };
          selectedItemNameEl.textContent = itemName;
          selectedPanel.style.display = "block";
          
          if (itemId && itemId !== "?") {
             const existingContainer = document.getElementById("shops-tables-container");
             if (existingContainer) {
               existingContainer.innerHTML = "<p>Загрузка данных магазинов... Пожалуйста, подождите.</p>";
             } else {
               const loadingDiv = document.createElement("div");
               loadingDiv.id = "shops-tables-container";
               loadingDiv.innerHTML = "<p>Загрузка данных магазинов... Пожалуйста, подождите.</p>";
               selectedPanel.appendChild(loadingDiv);
             }
             loadShopsForItem(itemId);
          }
        });
      }

      ul.appendChild(li);
    });

    result.appendChild(ul);

  } catch (e) {
    result.textContent = `Ошибка запроса: ${e?.message || e}`;
  }
}

button.addEventListener("click", searchMarket);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchMarket();
});

