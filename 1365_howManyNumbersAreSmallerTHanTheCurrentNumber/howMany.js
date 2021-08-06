var smallerNumbersThanCurrent = function (nums) {
	let final = [];
	for (let i = 0; i < nums.length; i++) {
		let count = 0;
		let j = 0;
		while (j < nums.length) {
			if (nums[i] > nums[j]) {
				count++;
				j++;
			} else {
				j++;
			}
		}
		final.push(count);
	}
	console.log(final);
	return final;
};

let nums = [8, 1, 2, 2, 3];
smallerNumbersThanCurrent(nums);
