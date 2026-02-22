const noob_storage = window.LocalStorage;

function debounce(fn, delay = 15000, immediate = false) {
  let timer;

  return function (...args) {
    const callNow = immediate && !timer;

    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) {
        console.log('DEBOUNCE CALLED 2')
        fn.apply(this, args);
      }
    }, delay);

    if (callNow) {
      console.log('DEBOUNCE CALLED')
      fn.apply(this, args);
    }
  };
}

const d = debounce(function(value, key) {
  noob_storage.set(key, value);
});


class TopClanStorage {
  get(...props) {
    return noob_storage.get(...props);
  }

  set(key, value) {
    noob_storage.set(key, value);
    return;
    console.log(key, value)
    debugger
    d(key, value);
  }

  remove() {
    return noob_storage.remove(...props);
  }
}

// const b2 = debounce(() => console.log("DONE"), 5000);

// b2();

window.LocalStorage = new TopClanStorage();