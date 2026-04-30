const menuActions = {
  menu: {
    exit: {
      action: function() {
        window.close();
      }
    }
  },
  services: {
    market: {
      action: function() {
        chrome.windows.create({
          url: chrome.runtime.getURL("market.html"),
          type: "popup",
          width: 980,
          height: 760
        });
      }
    },
    loot: {
      action: function() {
        chrome.windows.create({
          url: chrome.runtime.getURL("windows/loot.html"),
          type: "popup",
          width: 800,
          height: 600
        });
      }
    },
    map: {
      action: function() {
        console.log('Карта');
      }
    }
  },
  clan: {
    clan_about: {
      action: function() {
        console.log('О Клане');
      }
    },
    clan_recruitment: {
      action: function() {
        console.log('Вступление');
      }
    }
  },
  product: {
    app: {
      action: function() {
        console.log('fantasyland app');
      }
    },
    fallen_world: {
      action: function() {
        console.log('fallen world');
      }
    }
  },
  support: {
    donation: {
      action: function() {
        console.log('Donations');
      }
    }
  }
};