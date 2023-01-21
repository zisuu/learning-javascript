const bob = new Student("Bob", 25, "BFH");

console.log(bob instanceof Student);  // >> true
console.log(bob instanceof Person);   // >> true

bob.speak("Hi");                      // >> Bob says: Hi
bob.describe();                       // >> Bob is a student at BFH
bob.sleep();                          // >> CHRRRZ Z Z z z...
