var findDuplicates = function (nums) {
	let result = [];

	for (var i = 0; i < nums.length; i++) {
		let value = Math.abs(nums[i]);
		let index = value - 1;

		if (nums[index] < 0) {
			result.push(value);
		} else {
			nums[index] *= -1;
		}
	}
	console.log(result);
	return result;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
findDuplicates(nums);

/*
create results

loop through nums
    grab value in nums
    look at the index, which is value - 1
    if that value is less than 0
        push it in the results
    else
        set it to a negative value with *= -1

    return the results.
*/
