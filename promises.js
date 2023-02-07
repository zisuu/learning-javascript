// --- H E L P E R S ---
function appendQuote(quote) {
	document.querySelector('main').innerHTML += `<p>${quote}</p>`;
}

function setState(state) {
	document.querySelector('header span').innerHTML = state;
}

function appendError(error) {
	document.querySelector('footer').innerHTML += `ERROR: ${error}<br>`;
}


// --- P R O M I S E S ---
function getQuote() {
	return new Promise(function(resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://locher.ti.bfh.ch/services/quote');
		xhr.onloadend = function() {
			if (this.status === 200) {
				resolve(this.responseText);
			} else {
				reject(`An error occurred (${this.status}): ${this.responseText}`);
			}
		};
		xhr.send();
	});
}

function toMorse(text) {
	return new Promise(function(resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://locher.ti.bfh.ch/services/morse?text=' + text);
		xhr.onloadend = function() {
			if (this.status === 200) {
				resolve({
					text: text,
					code: this.responseText}
				);
			} else {
				reject(`An error occurred (${this.status}): ${this.responseText}`);
			}
		};
		xhr.send();
	});
}

/*
getQuote()
	.then(quote => {
		toMorse(quote)
			.then(morse => appendQuote(morse.text + "<br>" + morse.code))
			.catch(error => appendError(error));
	})
	.catch(error => appendError(error));
*/

document.querySelector('main').style.display = 'none';

function getQuoteMorse() {
	return getQuote()
		.then(quote => toMorse(quote))
		.then(morse => appendQuote(morse.text + "<br>" + morse.code))
		.catch(error => {
			appendError(error);
			return getQuoteMorse();
		});
}

const promises = [];
for(let i = 0; i < 4; i++) {
	const promise = getQuoteMorse();
	promises.push(promise);
}

Promise.all(promises)
	.then(results => {
		setState("DONE.");
		document.querySelector('main').style.display = 'block';
	})



//Promise.all([getQuote(), getQuote(), getQuote()])
//	.then(quotes => /* 3 quotes... */)


getQuote()
	.then(data => data.quote.length)
	.then(l => console.log(l))
	.catch(error => console.log(error));

//
// let p = getQuote();
// p.then(quote => console.log(quote));
// p.then(quote => appendQuote(quote));
