function handleMenuClick(groupId, itemId) {
  if (groupId && itemId) {
    const group = menuActions[groupId];
    if (group && group[itemId]) {
      const actionItem = group[itemId];
      if (typeof actionItem.action === 'function') {
        actionItem.action();
      }
    } else {
      console.log(`No action defined for ${groupId} -> ${itemId}`);
    }
  } else if (groupId) {
    // Top-level menu clicked without sub-items (if any exist)
    console.log(`Top menu clicked: ${groupId}`);
  }
}

function renderMenu() {
  const header = document.querySelector('header');
  if (!header) return;

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  menuData.forEach(menuItem => {
    const li = document.createElement('li');
    li.textContent = menuItem.title;
    
    if (menuItem.id) {
      li.addEventListener('click', (e) => {
        if (e.target === li) {
          handleMenuClick(menuItem.id, null);
        }
      });
    }
    
    if (menuItem.items && menuItem.items.length > 0) {
      const subUl = document.createElement('ul');
      menuItem.items.forEach(subItem => {
        const subLi = document.createElement('li');
        subLi.textContent = subItem.label;
        
        if (subItem.id) {
          subLi.addEventListener('click', (e) => {
            e.stopPropagation();
            handleMenuClick(menuItem.id, subItem.id);
          });
        }
        
        subUl.appendChild(subLi);
      });
      li.appendChild(subUl);
    }
    
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  header.innerHTML = ''; // clear out the hardcoded menu
  header.appendChild(nav);
}

window.addEventListener('DOMContentLoaded', renderMenu);