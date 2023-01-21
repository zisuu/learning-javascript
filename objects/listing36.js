// speak is not bound ('this' points to the global object or is undefined)
function speak(phrase) {
    console.log(this.name+" says: "+phrase);
}
speak("Hello");           // >> undefined says: Hello
                          // OR
                          // TypeError: Cannot read property name of undefined

const alice = {name: "Alice", speak: speak};
// speak is implicitly bound to alice when called as method
alice.speak("Hello");     // >> Alice says: Hello

// bind creates a new function which is explicitly bound to the passed object
const aliceSpeak = speak.bind(alice);
aliceSpeak("Hello");      // >> Alice says: Hello

// call explicitly binds the function to the passed object and calls it
speak.call(alice, "Hi");  // >> Alice says: Hi
