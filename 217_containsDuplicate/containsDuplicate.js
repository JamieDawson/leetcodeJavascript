var containsDuplicate = function (nums) {
	let hash = {};

	for (var i = 0; i < nums.length; i++) {
		let key = nums[i];
		hash[key] = hash[key] + 1 || 1;
	}

	for (var i = 0; i < nums.length; i++) {
		let key = nums[i];
		if (hash[key] >= 2) {
			return true;
		}
	}
	return false;
};

let arr = [1, 2, 3];
console.log(containsDuplicate(arr));
