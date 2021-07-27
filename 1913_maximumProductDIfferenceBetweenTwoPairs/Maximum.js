var maxProductDifference = function (nums) {
	let hash = {};
	let size = 0;

	for (var i = 0; i < nums.length; i++) {
		if (hash[nums[i]]) {
			hash[nums[i]]++;
		} else {
			hash[nums[i]] = 1;
			size++;
		}
	}
	// console.log(hash);
	// console.log(size);
	// console.log(Object.keys(hash)[0]);
	// console.log(Object.keys(hash)[1]);
	// console.log(Object.keys(hash)[size - 1]);
	// console.log(Object.keys(hash)[size - 2]);

	return (
		Object.keys(hash)[size - 2] * Object.keys(hash)[size - 1] -
		Object.keys(hash)[0] * Object.keys(hash)[1]
	);
};

let nums = [4, 2, 5, 9, 7, 4, 8];
let done = maxProductDifference(nums);
console.log(done);
