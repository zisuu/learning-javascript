const bob = {name: "Bob"};

// Add method to object
bob.speak = function(phrase) {
    console.log(this.name+" says: "+phrase);
};
bob.speak("What's up?");        // >> Bob says: What's up?
console.log(bob.speak);         // >> [Function]

// Object literal with method
const alice = {
    name: "Alice",
    speak: function(phrase) {
        console.log(this.name+" says: "+phrase);
    }
};
alice.speak("Great!");          // >> Alice says: Great!
