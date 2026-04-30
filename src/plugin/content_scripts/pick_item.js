(async () => {
  const params = new URLSearchParams(location.search);

  console.log('picked up', {
    itemId: Number(params.get('item_id')),
    amount: Number(params.get('qn')) || 1
  })

  await chrome.runtime.sendMessage({ 
    type: 'addItems', 
    ...{
      itemId: params.get('item_id'),
      amount: Number(params.get('qn')) || 1
    } 
  });
})();

