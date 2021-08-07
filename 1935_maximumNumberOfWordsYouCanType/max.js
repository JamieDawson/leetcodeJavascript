var canBeTypedWords = function (text, brokenLetters) {
	let hash = new Map();
	let textArr = text.split(' ');
	let counter = 0;

	for (var i = 0; i < brokenLetters.length; i++) {
		hash.set(brokenLetters[i], 1);
	}

	for (let word of textArr) {
		let brokenFound = false;
		for (var i = 0; i < word.length; i++) {
			if (hash.get(word[i])) {
				brokenFound = true;
			}
		}
		if (brokenFound == false) {
			counter++;
		}
	}
	return counter;
};

let text = 'hello world';
let brokenLetters = 'ad';

canBeTypedWords(text, brokenLetters);
