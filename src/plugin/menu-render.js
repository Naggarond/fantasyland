function handleMenuClick(id) {
  if (id) {
    console.log('Menu clicked:', id);
    // You can handle specific navigation based on ID here
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
          handleMenuClick(menuItem.id);
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
            handleMenuClick(subItem.id);
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