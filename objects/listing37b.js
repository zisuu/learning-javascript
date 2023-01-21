function Person(name, age) {
    // Public property
    this.name = name;
    // Local variable (private property)
    const yearOfBirth = new Date().getFullYear()-age;
    // Only functions defined in the constructor function can access local variables
    this.getYearOfBirth = function() {
        return yearOfBirth;
    }
}
Person.prototype.toString = function() {
    // Prototype functions have only access to the public properties of the object
    return this.name+" was bron in "+this.getYearOfBirth();
}
const bob = new Person("Bob", 25);
console.log(bob+"!");   // >> Bob was born in 1996!
