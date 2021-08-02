var buildArray = function (nums) {
	let ans = [];

	for (var i = 0; i < nums.length; i++) {
		ans[i] = nums[nums[i]];
	}
	return nums;
};

let nums = [0, 2, 1, 5, 3, 4];
buildArray(nums);
