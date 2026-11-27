 // flag based approach

  function trottle1(fn, delay) {
    let shouldWait = false;
    return function (...args) {
      if (shouldWait) return;
      fn(...args);
      shouldWait = true;

      setTimeout(() => {
        shouldWait = false;
      }, delay)
    }
  }

  // timesTamp based approach

  function trottle1(fn, delay) {
    let lastExecuted = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastExecuted >= delay) {
        fn(...args);
        lastExecuted = now;
      }
    };
  }
