const bob = {name: "Bob", age: 25};

// Add new properties
bob.hairColor = "black";
console.log(bob.hairColor);          // >> black
console.log(bob.lastname);           // >> undefined

// Access properties using the dot or index operator
console.log(bob.name);               // >> Bob
console.log(bob["name"]);            // >> Bob

// Property with quoted name
const alice = {
    name: "Alice",
    "year of birth": 1991
};
console.log(alice["year of birth"]); // >> 1991
