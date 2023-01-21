const counter = function(init) {
    let val = Number(init);
    return function() {
        return ++val;
    };
};

const countA = counter(12);    // countA references a specific instance of val
console.log(countA());         // >> 13
console.log(countA());         // >> 14

const countB = counter("6");   // countB references another instance of val
console.log(countB());         // >> 7
console.log(countA());         // >> 15
