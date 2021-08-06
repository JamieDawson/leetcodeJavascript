var sumOfUnique = function (nums) {
	let hash = new Map();
	let total = 0;

	for (var i = 0; i < nums.length; i++) {
		let grab = nums[i];
		if (hash[grab]) hash[grab]++;
		else hash[grab] = 1;
	}

	for (const [key, value] of Object.entries(hash)) {
		if (value == 1) {
			total += Number(key);
		}
	}

	return total;
};

let nums = [1, 2, 3, 4, 5];

sumOfUnique(nums);

/*
1) Create a hash that will hold all the keys and values.
    The key will be the number in the array and the value is how many times it is found in the array.

2) Loop through the key/values in the hash.
    if the value is one, then add the key to the counter variable to keep track of it.

    Time complexity: O(n)
    Space complexity: O(1)

*/
