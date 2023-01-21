const a = 7;
const b = "7";
// a and b are equivalent...
console.log(a == b);                          // >> true
// ... but not identical (number vs. string)
console.log(a === b);                         // >> false
console.log(a === parseInt(b));               // >> true


const x = 0;
const y = false;
// x and y are equivalent...
console.log(x == y);                          // >> true
// ...but not identical (number vs. boolean)
console.log(x === y);                         // >> false
