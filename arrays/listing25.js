const colors = ["blue", "red", "black"];
console.log(colors.length);               // >> 3

// Named indexes address object properties and not array values
colors["favorite"] = "pink";
console.log(colors.favorite);             // >> pink
console.log(colors.length);               // >> 3 (still!)

colors.forEach(function(item, index) {    // >> 0 -> blue
    console.log(index+" -> "+item);     // >> 1 -> red
});                                       // >> 2 -> black

for (let i in colors) {                   // >> 0 -> blue
    console.log(i+" -> "+colors[i]);    // >> 1 -> red
}                                         // >> 2 -> black
                                          // >> favorite -> pink
