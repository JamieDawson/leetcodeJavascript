var isMonotonic = function (nums) {
	let increasing = true;
	let decreasing = true;
	let j = 1;

	for (var i = 0; i < nums.length; i++) {
		if (nums[i] > nums[j]) {
			increasing = false;
		}
		if (nums[i] < nums[j]) {
			decreasing = false;
		}
		j++;
	}
	console.log(increasing);
	console.log(decreasing);

	return increasing || decreasing;
};

let nums = [1, 2, 4, 5];

isMonotonic(nums);

/*
//var increasing = true
var decreasing = true

loop check if numbers are increasing or decreasing
    //if i > j
        set increasing to false
    //if i < j
        set decreasing to false

if increasing & decreasing are true
    return true
return false

*/
