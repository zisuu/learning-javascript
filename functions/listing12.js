const a = "Hello ";          // a has global scope

const f = function(b) {      // b is local to f
    const c = "!";             // c is local to f
    console.log(a+b+c);
};

f("World");                 // >> Hello World!
console.log(typeof b);      // >> undefined
console.log(typeof c);      // >> undefined
