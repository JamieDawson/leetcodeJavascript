var sortSentence = function (s) {
	s = s.split(' ');
	let arr = [];

	for (var i = 0; i < s.length; i++) {
		let wordLenght = s[i].length;
		let wordNum = s[i][wordLenght - 1];

		arr[wordNum] = s[i].slice(0, -1);
	}
	let finalString = arr.join(' ').trim();

	return finalString;
};

let s = 'is2 sentence4 This1 a3';
sortSentence(s);
