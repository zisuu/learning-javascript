"use strict"

const alphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

const alphabet = alphabetString.split(";");
const charToMorseCode = function (char) {
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i].split("=")[0] === char) {
            return alphabet[i].split("=")[1];
        }
    }
    return "[" + char + "]";
};

function stringToMorseCode(s) {
    const chars = s.toLowerCase().split('');
    let out = '';
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        out += charToMorseCode(char) + "/";
    }
    return out;
}

console.log(stringToMorseCode("Hello World!"))

