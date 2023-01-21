const a = 2;

const f = function(b) {
    let x = 1;

    const g = function() {    // g has access to the local variables of f und to
        x *= a;                 // the variables of the global scope
    };

    while (x < b) g();
    return x;
};
console.log(f(100))        // >> 128
