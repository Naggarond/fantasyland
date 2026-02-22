
const node = document.querySelector('body > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr > td:nth-child(2)');
if (node) {
  try {
    node.setAttribute('align', 'left');
  } catch(e) {
    debugger
  }

}

