// functions

const x = 10;
const square = function (x) {
    return x * x;
};

console.log(typeof square());
console.log(square(7));

const f = function (b) {
    const c = "!";
    console.log(b + c);
};

f("hello world");

// it is possible to access a var which is set outside a function. But you cannot access a var which is
// set in a function from outside
// js is lexical scoped and not dynamic

const a = 2;
const f2 = function(b) {
    return a + b;
};
console.log(f2(7));
const g = function() {
    const a = 5;
    return f2(7);
};
console.log(g());
// >> 9
// a is hiding the global variable inside g
// but the global variable is used inside f2
// >> 9

// what is the diff between heap and stack?


// Functions are Objects
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
