var factorial = function fact(n) {
    if (n <= 1) {
        return 1;
    }
    return n * fact(n-1);
};

console.log(factorial(5));  // >> 120

fact(5); // ! ReferenceError: fact is not defined !