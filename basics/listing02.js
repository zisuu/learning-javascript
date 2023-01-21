let x = 12;
console.log(typeof x);  // >> number

// Values of different types can be assigned to a variable
x = "Hello World";
console.log(typeof x);  // >> string

// Automatic type conversion
let y = 12+"10";
console.log(typeof y);  // >> string ('1210')
y = 12-"10";
console.log(typeof y);  // >> number (2)

// Explicit type conversion with Number(), String() and Boolean()
let z = 12+Number("10");
console.log(typeof z);  // >> number
console.log(z);         // >> 22
