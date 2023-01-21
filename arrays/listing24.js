const colors = ["blue", "red", , "black"];

// Using for loop
for (let i = 0; i < a.length; i++) {      // >> 0 -> blue
    console.log(i+" -> "+a[i]);         // >> 1 -> red
}                                         // >> 2 -> undefined
                                          // >> 3 -> black

// Using for...of loop
for (let color of colors) {               // >> blue
    console.log(color);                     // >> red
}                                         // >> undefined
                                          // >> black

// Using forEach method (empty slots are skipped)
a.forEach(function(item, index) {         // >> 0 -> blue
    console.log(index+" -> "+item);     // >> 1 -> red
});                                       // >> 3 -> black
