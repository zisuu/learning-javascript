function getQuote() {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://locher.ti.bfh.ch/services/quote');
        xhr.onloadend = function () {
            if (this.status === 200) {
                resolve(this.responseText)
            } else {
                reject("Sorry, computation failed!");
            }
        }
        xhr.send();
    });
}

function toMorse(text) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://locher.ti.bfh.ch/services/morse?text=' + text);
        xhr.onloadend = function () {
            if (this.status === 200) {
                resolve({
                        text: text,
                        code: this.responseText
                    }
                );
            } else {
                reject("Sorry, computation failed!");
            }
        }
        xhr.send();
    });
}

// getQuote()
//     .then(quote => console.log(quote))
//     .catch(error => console.log(error))

// toMorse("Hello bob")
//     .then(morse => console.log(morse.text + ", " + morse.code))
//     .catch(error => console.log(error))
