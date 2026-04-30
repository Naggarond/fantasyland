const script = document.createElement("script");
script.src = chrome.runtime.getURL('../feature/mapper/top_storage.js');
(document.head || document.documentElement).appendChild(script);
