var singleNumber = function (nums) {
	var hash = {};

	for (var i = 0; i < nums.length; i++) {
		let value = nums[i];
		hash[value] = hash[value] + 1 || 1;
	}

	for (var i = 0; i < nums.length; i++) {
		let value = nums[i];
		if (hash[value] === 1) {
			return nums[i];
		}
	}
};

let nums = [1];
console.log(singleNumber(nums));
