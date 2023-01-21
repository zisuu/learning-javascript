function Person(name, age) {
    this.name = name;
    this.age = age;
    this.speak = function (phrase) {
        console.log(this.name + " says: " + phrase);
    }
    this.sleep = function () {
        console.log("CHRRRZ Z Z z z...");
    };
}

const bob = new Person("Bob", 25);

// Alter bob
bob.speak = function () {
    console.log("Sorry, I prefer writing");
}
bob.write = function (phrase) {
    console.log(this.name + " writes: " + phrase);
}
delete bob.sleep;

bob.speak("Bla bla");    // >> Sorry, I prefer writing
bob.write("Bla bla");   // >> Bob writes: Bla bla
bob.sleep();             // ! TypeError: bob.sleep is not a function !

// bob is still a Person
console.log(bob instanceof Person);  // >> true