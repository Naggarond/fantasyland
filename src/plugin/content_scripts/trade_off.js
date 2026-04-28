
document.addEventListener("DOMNodeInserted", function(e) {

  
var insertedNodesDefault = [];
    insertedNodesDefault.push(e.target);
    console.log('insertedNodesDefault', insertedNodesDefault);
}, false);

  const mob = new MutationObserver(m => console.log(m));
  mob.observe(document.body, { childList: true, subtree: true });

console.log('has trade part', document.querySelector('body > table:nth-child(4) > tbody > tr:nth-child(2) > td'), document.querySelector('#trade_main'))

const trade_el = document.querySelector('#trade_main');
if (trade_el) {
  const mo = new MutationObserver(m => console.log(m));
  mo.observe(trade_el, { childList: true, subtree: true });

  const moP = new MutationObserver(m => console.log('parent', m));
  moP.observe(trade_el.parentNode, { childList: true, subtree: true });

  var insertedNodes = [];
  document.addEventListener("DOMNodeInserted", function(e) {
      insertedNodes.push(e.target);
      debugger
  }, false);

  const observer = new MutationObserver(m => console.log('observer', m));
  observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

  trade_el.addEventListener("DOMNodeInserted", function(e) {
      insertedNodes.push(e.target);
      debugger
  }, false);
  /*
  trade_el.addEventListener("DOMNodeInserted", e => {
    console.log('DOMINSERTED', e)
    if (e.target.id === "trade_main") console.log("trade_main replaced!");
  });

  if (trade_el.childNodes.length > 0) {
    debugger
  }

  var observer = new MutationObserver(function(mutations) {
    // type: "childList"
    if (mutations.length === 13) {
      debugger
    }
    console.log('mutations', mutations)

    // [text, a, br, text, a, br, br, text, script, script, script, table <===, text]
   var insertedNodes = [];
      mutations.forEach(function(mutation) {
        console.log('mutation', mutation)

      for (var i = 0; i < mutation.addedNodes.length; i++)
          insertedNodes.push(mutation.addedNodes[i]);
      })

        console.log('insertedNodes', insertedNodes);
  });
  observer.observe(trade_el, { attributes: true, childList: true, characterData: true, subtree: true });
  */
}




function extractGoods(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const result = [];
  const forms = doc.querySelectorAll("form[action='buy.php']");

  for (const form of forms) {
    const good = form.querySelector("input[name='good_id']")?.value;
    const shp  = form.querySelector("input[name='shp_id']")?.value;

    if (good && shp) {
      result.push({
        good_id: Number(good),
        shp_id: Number(shp)
      });
    }
  }

  return result;
}