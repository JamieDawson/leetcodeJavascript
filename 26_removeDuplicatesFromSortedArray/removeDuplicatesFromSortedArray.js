var removeDuplicates = function (nums) {
	var hashTable = {};

	for (var i = 0; i < nums.length; i++) {
		var char = nums[i];
		hashTable[char] = hashTable[char] + 1 || 1;
	}

	var sizeOfNums = nums.length;
	nums = [];

	for (var i = 0; i < sizeOfNums; i++) {
		nums.push(hashTable[0][i]);
	}

	console.log(nums);
};

var nums = [1, 2, 2, 3, 3, 5, 6, 7];
removeDuplicates(nums);
