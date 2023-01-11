// console.log("Hello World from Script!");
// how to set a variable:
//      var -> var is dead, don't use it
//      let
//      const
let x;
console.log(x);
x = 7;
console.log(x);

const z = 8;
// z = 10; does not work because this variable is final
// recommendation = always use const. Only need let if you really need to change the variable

// every programming language needs types. If the Type is not set, it will be interpreted during runtime
console.log(typeof x);
x = "Hello";
console.log(typeof x);

// DON'T do this!
y = 12 + "10";
console.log(typeof y);
console.log(y);
y = 12 - "10";
console.log(typeof y);
console.log(y);
y = "12" + 10;
console.log(typeof y);
console.log(y);

const u = 7;
const v = "7";
console.log(u == v); // checks equality of value, without type checking -> true
console.log(u === v); // checks equality of value and the type -> false
console.log(u !== v); // checks equality of value and the type -> true

if (u == v) {
    var q = 0;
}

// why don't use var? var is not block scoped, only function scoped

// "use strict"; -> browser interprets the js code with strict interpretation
