// The function f can be used before it is declared
console.log(f(4));     // >> 48

function f(a) {
    return g() * a;
};

function g() {
    return 12;
}
