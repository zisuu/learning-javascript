const alphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

const alphabet = alphabetString.split(";");
const convertToMorse = function (morse) {
// previous line could be written as "function convertToMorse(morse)"
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i].split("=")[1] === morse) {
            return alphabet[i].split("=")[0];
        }
    }
};

console.log(convertToMorse("..--.."));
