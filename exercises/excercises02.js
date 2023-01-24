"use strict";

// 1. Character
function Character(char, code) {
    this.char = char;
    this.code = code;
}


Character.prototype.toString = function () {
    return this.char + ": " + this.code;
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

    this.characterMap = {};
    const that = this;
    characters.forEach(function (item, index) {
        that.characterMap[item.char] = item;
    });
}

Encoding.prototype.encode = function (text) {

    let encodeText = "";
    for (let i = 0; i < text.length; i++) {
        if (this.characterMap[text[i]]) {
            const character = this.characterMap[text[i]];
            encodeText += character.code + this.delimiter;
        } else {
            encodeText += "[" + text[i] + "]" + this.delimiter;
        }
    }
    return encodeText;
};

Encoding.prototype.toString = function () {
    let output = this.name + ": ";
    for (let char in this.characterMap) {
        output += char.toString() + ", ";
    }
    return output;
};

// create morseCodeAlphabetArray
const morseCodeAlphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

const morseCodeAlphabetArray = [];
const alphabet = morseCodeAlphabetString.split(";");

alphabet.forEach(function (item) {
    const char = item.split('=');
    morseCodeAlphabetArray.push(new Character(char[0], char[1]))
});


const morseCode = new Encoding("Morse Code", "/", morseCodeAlphabetArray)

// override
morseCode.encode = function (text) {
    text = text.toLowerCase()
    return Encoding.prototype.encode.call(morseCode, text)
}

console.log(morseCode.encode("Hello world!"));
