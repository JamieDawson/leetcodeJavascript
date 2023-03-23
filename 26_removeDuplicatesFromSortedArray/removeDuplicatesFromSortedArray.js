var removeDuplicates = function (nums) {};

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums);

/*
Inputs you can get
[0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
[1,1,2];
[0,0,0,0,3];

*/
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*
var removeDuplicates = function (nums) {
	let first = nums[0];
	let last = nums[nums.length - 1];
	let k = 0;

	while (first <= last) {
		k++;
		first++;
	}

	first = nums[0];

	for (var i = 0; i < nums.length; i++) {
		if (first <= last) {
			nums[i] = first;
			first++;
		} else {
			nums[i] = '_';
		}
	}
	//console.log(nums);

	return k;
};
*/
