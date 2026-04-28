window.addEventListener('load', () => {
    document.querySelector('#show').addEventListener('click', () => {
      console.log('action')
      //chrome.action.setPopup({popup: 'popups/main.html'});

        chrome.windows.create({
            url: chrome.runtime.getURL("popups/main.html"),
            type: "popup",
            top: 200,
            left: 200,
            width: 850,
            height: 700,
        });
    });

    document.querySelector('#refresh-items').addEventListener('click', () => {
      chrome.runtime.sendMessage({ 
        type: 'refresh-items'
      });
    });

    document.getElementById("market-open").addEventListener("click", async () => {
      await chrome.windows.create({
        url: chrome.runtime.getURL("market.html"),
        type: "popup",
        width: 980,
        height: 760
      });
    });
});