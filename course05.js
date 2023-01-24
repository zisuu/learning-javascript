
eve = {
    name: "Eve",
    say: function (phrase) {
        console.log(this.name + " says: " + phrase);
    }
};

eve.say("Hello world!");

const f = eve.say;
f("Hi bob"); // undefined says: Hi bob
f.call(eve, "hi Bob") // valid
f.call({name:"Alice"}, "hi Bob") // valid
const g = f.bind(eve);
g("hi eve")  // valid

let bob = {
    name: "Bob",
};

bob.say = eve.say;
bob.say("Hi Eve") // Bob says: Hi Eve

// "this" is a pointer to the object calling it. Is bound to the function at runtime.