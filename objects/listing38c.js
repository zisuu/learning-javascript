// Helper to correctly set up the prototype chain
function extend(base, sub) {
    const origProto = sub.prototype;
    sub.prototype = Object.create(base.prototype);
    for (let key in origProto) {
        sub.prototype[key] = origProto[key];
    }
    Object.defineProperty(sub.prototype, 'constructor', {
        enumerable: false,
        value: sub
    });
}
//----------------------------------------

function Prof(name, age) {
    Person.call(this, name, age);
}
Prof.prototype.describe = function() {
    console.log("Prof. "+this.name+" is "+this.age+"years old");
}
extend(Person, Prof);
