var arrayStringsAreEqual = function (word1, word2) {
	let i = 0; //word
	let j = 0;
	let m = 0; //char
	let n = 0;

	while (i < word1.length && j < word2.length) {
		if (word1[i][m++] !== word2[j][n++]) {
			return false;
		}

		if (m >= word1[i].length) {
			m = 0;
			i++;
		}

		if (n >= word2[j].length) {
			n = 0;
			j++;
		}
	}

	return i == word1.length && j == word2.length;
};

let word1 = ['ab', 'c'];
let word2 = ['a', 'bc'];

let done = arrayStringsAreEqual(word1, word2);
console.log(done);
