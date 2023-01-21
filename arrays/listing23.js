const a = [7, 8, 40];

// Change value
a[2] = 45;              // [7, 8, 45]

// Insert new values
a[a.length] = 17;       // [7, 8, 45, 17]
a[6] = 23;              // [7, 8, 45, 17, , , 23] (length: 7)
console.log(a[5]);      // >> undefined

// Remove some elements
a.splice(2, 4);         // [7, 8, 23]

// Use array as stack
a.push(12);             // [7, 8, 23, 12]
console.log(a.pop());   // >> 12  (a: [7, 8, 23])
