// Function as argument
const repeat = function(action, n) {
    for (let i = 0; i < n; i++) action();
};

const sayHello = function() {
    console.log("Hello");
}
repeat(sayHello, 3);                   // >> Hello Hello Hello

// Function as return value
const formatter = function(prefix, suffix) {
    return function(s) {
        return prefix+s+suffix;
    }
};

const format = formatter("'", "!'");
console.log(format("Hello World"));    // >> 'Hello World!'
