//Time complexity:  O(n^2) since it's a loop in a loop.
// var numIdenticalPairs = function (nums) {
// 	let counter = 0;
// 	for (var i = 0; i < nums.length; i++) {
// 		for (j = i + 1; j < nums.length; j++) {
// 			if (nums[i] == nums[j]) {
// 				counter++;
// 			}
// 		}
// 	}
// 	console.log(counter);
// 	return counter;
// };

let nums = [1, 2, 3, 1, 1, 3];

numIdenticalPairs(nums);
