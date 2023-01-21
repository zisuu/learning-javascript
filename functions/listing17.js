// Declare f to be a function
function f() {
    return "I'm a chicken";
}

console.log(f());      // >> I'm a chicken

// The variable f can be reassigned
f = function() {
    return "I'm a fox";
}

console.log(f());      // >> I'm a fox
