var runningSum = function (nums) {
	var count = 0;

	for (var i = 0; i < nums.length; i++) {
		count += nums[i];
		nums[i] = count;
	}

	return nums;
};

var nums = [1, 2, 3, 4];
console.log(runningSum(nums));
