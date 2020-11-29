var firstUniqChar = function (s) {
	const hashTable = {};

	for (let char of s) {
		if (hashTable[char]) hashTable[char]++;
		else hashTable[char] = 1;
	}

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (hashTable[char] == 1) return i;
	}

	return -1;
};

let s = 'aaron';
firstUniqChar(s);
