var createTargetArray = function (nums, index) {
	var sorted = [];

	for (var i = 0; i < index.length; i++) {
		sorted.splice(index[i], 0, nums[i]);
	}
	return sorted;
};

let nums = [0, 1, 2, 3, 4];
let index = [0, 1, 2, 2, 1];

createTargetArray(nums, index);

/*
   create empty array
   
   loop through index array
        use slice functionality to add values.

    return array.
*/

/*
    Using the slice functionality helped in this situation.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/
