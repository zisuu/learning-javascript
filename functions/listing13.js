const a = 2;

const f = function(b) {
    return a+b;
};

console.log(f(7));      // >> 9

const g = function() {
    const a = 5;          // a is hiding the global variable inside g
    return f(7);          // but the global variable is used inside f
};
console.log(g());       // >> 9
