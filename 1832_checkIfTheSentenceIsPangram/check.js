var checkIfPangram = function (sentence) {
	let hash = new Map();
	let count = 0;

	for (var i = 0; i < sentence.length; i++) {
		let grab = sentence[i];
		hash[grab] = 1;
	}

	for (key in hash) {
		count++;
	}

	if (count == 26) {
		return true;
	}
	return false;
};

let sentence = 'thequickbrownfoxjumpsoverthelazydog';
checkIfPangram(sentence);

/*
Creating an empty has to take in each letter. The values for the keys don't matter. 
All we care about is the size of the hash when we are done.

if the size of the has is 26, then that means all the letters in the alphabet are in there.
If not, then we return false.

*/
