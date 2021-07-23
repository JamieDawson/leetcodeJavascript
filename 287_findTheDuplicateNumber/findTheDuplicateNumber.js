var findDuplicate = function (nums) {
	//create a hash
	let hash = {};

	//apply keys/values to hash
	for (var i = 0; i < nums.length; i++) {
		if (hash[nums[i]]) {
			hash[nums[i]]++;
		} else {
			hash[nums[i]] = 1;
		}
	}

	for (var i = 0; i < nums.length; i++) {
		if (hash[nums[i]] > 1) {
			console.log(nums[i]);
			return nums[i];
		}
	}
	return null;
};

let nums = [1, 3, 4, 3, 2];
findDuplicate(nums);
