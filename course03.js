"use strict"

let colors = ['blue', 'green', 'yellow'];

colors[6] = 'red';
console.log(colors);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// FIFO = first in first out -> that's a queue
// LIFO = last in forst out -> that's a stack

// push = put's it on top of stack
// pop = pull's from top of stack

// in javascript a array can also contain mixed types:
let a = ['bob', 25, 'alice', 'bern', 3006];
console.log(a);

// loop with for
for (let i = 0; i < colors.length; i++) {
    console.log(i + ' -> ' + colors[i]);
}

// loop with for each
colors.forEach(function (item, index) {
    console.log(index + ' -> ' + item);
});

// for without index
for(let color of colors) {
    console.log(color);
}

// take care it's a script language, you can also define string as index, but don't verwechsle it with Objects
colors['favorite'] = 'Orange';
console.log(colors['favorite']);
console.log(colors.length);

colors.forEach(function(item, index) {
    console.log(index + '-> ' + item);
});