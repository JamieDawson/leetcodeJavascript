var missingNumber = function (nums) {
	//create hash
	let hash = {};
	//apply keys and values
	for (var i = 0; i < nums.length; i++) {
		if (hash[nums[i]]) {
			hash[nums[i]]++;
		} else {
			hash[nums[i]] = 1;
		}
	}
	//	console.log(Object.keys(hash).length);

	let hold = 0;
	for (var i = 0; i < nums.length; i++) {
		if (!hash.hasOwnProperty(i)) {
			//console.log(i);
			return i;
		}
		hold = i + 1;
	}
	//console.log(hold);
	return hold;
};

let arr = [];
missingNumber(arr);
