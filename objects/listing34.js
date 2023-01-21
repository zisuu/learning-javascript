// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.speak = function(phrase) {
        console.log(this.name+" says: "+phrase);
    }
}

// Create objects
const alice = new Person("Alice", 19);
const bob = new Person("Bob", 25);

console.log(alice.name);    // Alice
bob.speak("I'm Bob");       // >> Bob says: I'm Bob
