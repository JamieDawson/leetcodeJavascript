var groupAnagrams = function (strs) {
	const ht = {};

	for (let str of strs) {
		const sorted = str.split('').sort().join('');

		if (ht[sorted]) ht[sorted].push(str);
		else ht[sorted] = [str];
	}

	return Object.values(ht);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

let test = groupAnagrams(strs);
console.log(test);
