function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function() {
    console.log(this.name+" is "+this.age);
}
Person.prototype.speak = function(phrase) {
    console.log(this.name+" says: "+phrase);
}

// Student extends Person
function Student(name, age, university) {
    Person.call(this, name, age);
    this.university = university;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sleep = function() {
    console.log("CHRRRZ Z Z z z...");
}
Student.prototype.describe = function(){
    console.log(this.name+" is a student at "+this.university);
};
