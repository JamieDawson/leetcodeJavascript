var commonChars = function (A) {
	let hashOne = {};

	for (var i = 0; i < A[0].length; i++) {
		if (hashOne[A[0][i]]) hashOne[A[0][i]]++;
		else hashOne[A[0][i]] = 1;
	}
	//	console.log(hashOne);

	for (word of A) {
		console.log(word);
	}
};

let words = ['bella', 'label', 'roller'];
commonChars(words);

/*
Create hash for first word

Loop through rest of words in hash
    if value in hashOne doesn't exist in Hashtwo.
        Delete it.

*/
