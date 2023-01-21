"use strict";

// 1. Character
function Character(char, code) {
    this.char = char;
    this.code = code;
}


Character.prototype.toString = function () {
    console.log(this.char + ": " + this.code);
};

// const a = new Character("a", ".-");
// a.toString();
//
// const b = new Character("b", "-...");
// b.toString();
//
// const c = new Character("c", "-.-.");
// a.toString();

// 2. Encoding
function Encoding(name, delimiter, characters) {
    this.name = name;
    this.delimiter = delimiter;
    this.characters = characters;
}

Encoding.prototype.encode = function (text) {

    const encodeChar = function (char, encoding) {
        for (let [key, value] of encoding) {
                if (key === char) {
                    return value;
                }
        }

        return "[" + char + "]";
    };

    function encodeString(text, encoding, delimiter) {
        const s = text.toLowerCase().split('');
        let out = '';
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            out += encodeChar(char, encoding) + delimiter;
        }
        return out;
    }

    return encodeString(text, this.characters, this.delimiter);

};

Encoding.prototype.toString = function () {
    console.log(this.name + this.characters + this.delimiter);
};


// create morseCodeAlphabetArray
const morseCodeAlphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

const morseCodeAlphabetArray = morseCodeAlphabetString.split(";");

// const morseCodeAlphabetArrayOfCharObjects = [];
const morseCodeAlphabetMapOfCharObjects = new Map();
for (let i = 0; i < morseCodeAlphabetArray.length; i++) {
    // morseCodeAlphabetArrayOfCharObjects[i] = new Character(morseCodeAlphabetArray[i].split("=")[0], morseCodeAlphabetArray[i].split("=")[1]);
    morseCodeAlphabetMapOfCharObjects.set(morseCodeAlphabetArray[i].split("=")[0], morseCodeAlphabetArray[i].split("=")[1]);
}

const morseCode = new Encoding("Morse Code", "/", morseCodeAlphabetMapOfCharObjects)
// console.log(morseCodeAlphabetMapOfCharObjects);
console.log(morseCode.encode("Hello world!"));