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
    hallOfFame: {
      action: function() {
        chrome.windows.create({
          url: chrome.runtime.getURL("windows/hall-of-fame.html"),
          type: "popup",
          width: 980,
          height: 720
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
        chrome.windows.create({
          url: chrome.runtime.getURL("about.png"),
          type: "popup",
          width: 800,
          height: 600
        });
      }
    },
    clan_recruitment: {
      action: function() {
        chrome.windows.create({
          url: chrome.runtime.getURL("windows/recruitment.html"),
          type: "popup",
          width: 300,
          height: 600
        });
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
