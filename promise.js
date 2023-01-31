// a) Write a function getQuote() which requests from https://locher.ti.bfh.ch/
// services/quote a random quote. The function should return a promise to handle
// the asynchronism of the AJAX request.

function getQuote() {
    return new Promise(function (resolve, reject) {
        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();
        // Specify the type of request: method and url
        xhr.open('GET', 'https://locher.ti.bfh.ch/services/quote?format=json');
        // Register a callback to be notified about state changes
        xhr.onloadend = function () {
            if (this.status === 200) {
                const data = JSON.parse(this.responseText)
                resolve(data.quote + "<br>" + data.author)
            } else {
                reject("Sorry, computation failed!");
            }
        }
        xhr.send();
    });
}

getQuote()
    .then(result => console.log(result))
    .catch(error => console.log(error));


function toMorse(text) {
    return new Promise(function (resolve, reject) {
        // ... (AJAX request)
    });
}
