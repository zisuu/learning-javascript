"use strict";

let bob = {
    name: "bob",
    age: 25
};

console.log(bob.name);
console.log(typeof bob.name);
console.log(bob.age);
console.log(typeof bob.age);

console.log(bob['name'] === bob.name);

bob.lastName = 'marley';

// json == javascript object notation

// in javascript there are no access modifiers (private, public,..)

let property = 'name';
console.log(bob[property]);
property = 'age';
console.log(bob[property]);

function say(person, phrase) {
    console.log(person.name + " says: " + phrase);
}

say(bob, "Hello world1");

bob.say = function say(phrase) {
    console.log(this.name + " says: " + phrase);
}

bob.say("Hello world2");

let alice = {
    name: 'Alice',
    age: 26,
    say: function say(phrase) {
        console.log(this.name + " says: " + phrase);
    }
}

alice.say("Hi bob");

let eve = {
    name: 'Eve',
    age: 16,
    say: function say(phrase) {
        console.log(this.name + " says: " + phrase);
    }
}

// difference between methods and functions: a method is a function which is bound to an object.
// A function is not bound to an object

function personInit(person, name, age) {
    person.name = name;
    person.age = age;
    person.say = function say(phrase) {
        console.log(this.name + " says: " + phrase);
    }
}

// bob = personInit(bob, "Bob", 25);

function Person(name, age) { // this is called a constructor function
    this.name = name;
    this.age = age;
    this.say = function say(phrase) {
        console.log(this.name + " says: " + phrase);
    }
}

bob = new Person("bob", 25);
alice = new Person("Alice", 24);


// prototype allows to have default methods
function Person2(name, age) { // this is called a constructor function
    this.name = name;
    this.age = age;
}

Person2.prototype.say = function say(phrase) {
    console.log(this.name + " says: " + phrase);
}

let bob2 = new Person2("bob", 25);
let alice2 = new Person2("Alice", 24);

// must read: https://medium.com/hackernoon/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5