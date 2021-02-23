const firstUniqueChar = (s) => {
	//cretae a hash table.

	//scan hash table to apply keys and values
	// if value exist, increase key by 1
	//else, create value. set it to one.

	//scan hash table you created.
	//if value in key is greater than 1
	//return it

	let hash = {};
	for (let char of s) {
		if (hash[char]) hash[char]++;
		else hash[char] = 1;
	}

	for (var i = 0; i < s.length; i++) {
		let hold = s[i];
		if (hash[hold] == 1) {
			return i;
		}
	}
};

let s = 'loveleetcode';
firstUniqueChar(s);
