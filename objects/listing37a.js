function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Add functionality to Person's prototype
Person.prototype.speak = function(phrase) {
    console.log(this.name+" says: "+phrase);
};

const alice = new Person("Alice", 19);
const bob = new Person("Bob", 25);

// alice and bob have the same prototype
console.log(alice.__proto__ === bob.__proto__); // >> true

// New functionality can always be added to a prototype
Person.prototype.sleep = function() {
    console.log("CHRRRZ Z Z z z ...");
};

bob.sleep();    // >> CHRRR Z Z Z z z ...
