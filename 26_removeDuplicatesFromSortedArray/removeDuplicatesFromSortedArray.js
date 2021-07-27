var removeDuplicates = function (nums) {
	let small = nums[0];
	let big = nums[nums.length - 1];

	for (var i = 0; i < nums.length; i++) {
		if (small <= big) {
			nums[i] = small;
			small++;
		} else {
			nums[i] = '_';
		}
	}
	console.log(nums[big]);
	return nums[big];
};

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
