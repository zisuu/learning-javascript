
// IIFE

const counterService = (function() {
    let i = 0;

    function get() {
        return i;
    }

    function increment() {
        return ++i;
    }

    return {
        get: get,
        increment: increment
    }
})();
