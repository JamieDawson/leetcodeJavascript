var countConsistentStrings = function (allowed, words) {
	let hash = new Map();
	let counter = 0;

	for (var i = 0; i < allowed.length; i++) {
		hash.set(allowed[i], i);
	}
	//console.log(hash);

	for (var i = 0; i < words.length; i++) {
		let j = 0;
		let wrongLetterFound = false;
		while (words[i][j]) {
			//console.log(words[i][j]);
			if (hash.get(words[i][j]) == undefined) {
				//console.log('found');
				wrongLetterFound = true;
			}
			j++;
		}

		if (wrongLetterFound == false) {
			counter++;
		}
	}

	console.log(counter);
	return counter;
};

let allowed = 'ab';
let words = ['ad', 'bd', 'aaab', 'baa', 'badab'];
countConsistentStrings(allowed, words);

/*
var test = function (sen) {
	let hash = new Map();

	// hash.set(sen[0], 0);
	// hash.set(sen[1], 1);
	// hash.set(sen[2], 2)

	for (var i = 0; i < sen.length; i++) {
		hash.set(sen[i], i);
	}

	console.log(hash);

	//	console.log(hash.get('c'));

	if (hash.get('c')) {
		console.log('yes');
	} else {
		console.log('no');
	}
};

let sen = 'abc';
test(sen);
*/
