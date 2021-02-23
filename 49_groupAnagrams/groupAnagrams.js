const groupAnagram = (strs) => {
	//create hash
	//loop through strings in array
	//split, sort, and join selected string
	//if this anagram exist
	//push the unsorted into the keys value
	//else
	//create key and push value
	//return object values

	let ht = {};
	for (let char of strs) {
		let sorted = char.split('').sort().join('');
		if (ht[sorted]) ht[sorted].push(char);
		else ht[sorted] = [sorted];
	}
	console.log(Object.values(ht));
	return Object.values(ht);
};

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
groupAnagram(strs);
