var missingNumber = function (nums) {
	nums.sort();

	var t = 0;
	var s = 1;

	//console.log(t);
	//console.log(s);

	for (var i = 0; i < nums.length; i++) {
		console.log('wut');
		if (s <= nums.length) console.log('LOST');

		if (nums[t] + 1 == nums[s]) {
			t++;
			s++;
		} else {
			return nums[t] + 1;
		}
	}

	//console.log(nums);
};

let arr = [3, 0, 1];
missingNumber(arr);
