const box = document.querySelector('#moo1');

if (box) {
  const row = box.querySelector('table > tbody > tr:nth-child(1)');
  const countRow = box.querySelector('table > tbody > tr:nth-child(2)');
  const a = row.querySelectorAll('a');
  const items = Array.from(a).map(el => Number(el.getAttribute('href').split('=')[1]));

  chrome.runtime.sendMessage({ 
    type: 'requestAmountOfItems', 
    items
  }).then(response => {
    Array.from(countRow.querySelectorAll('td')).forEach((node, i) => {
      const text = node.textContent;
      const required = Number(text);
      const item_id = items[i];
      const amount = response[item_id];

      const span = document.createElement('span');
      span.textContent = amount;
      span.style.color = required > amount ? '#ff0000' : (amount / required) >= 2 ? '#00ff00' : '#ffffff';

      node.replaceChildren(text, ' / ', span);
    })
  });
}