var createTargetArray = function (nums, index) {
	var kv = {};
	var sorted = [];

	for (var i = 0; i < index.length; i++) {
		const grab = index[i];

		if (kv[grab]) kv[grab].push(nums[i]);
		else kv[grab] = [nums[i]];
	}

	for (var i in kv) {
		kv[i].reverse();
		for (var j = 0; j < kv[i].length; j++) {
			sorted.push(kv[i][j]);
		}
	}
	return sorted;
};

let nums = [0, 1, 2, 3, 4];
let index = [0, 1, 2, 2, 1];

createTargetArray(nums, index);
