var runningSum = function (nums) {
  let s = 0;

  for (var i = 0; i < nums.length; i++) {
    s += nums[i];
    nums[i] = s;
  }
  console.log(nums);
  return nums;
};

var nums = [1, 2, 3, 4];
runningSum(nums);

/*
Optimized Solution:


Variable to add numbers called s

loop til end of array
  set s to s + nums[current value]
  set nums[current value] to s

return nums
*/

/*
Runtime: 85 ms, faster than 76.96% of JavaScript online submissions for Running Sum of 1d Array.
Memory Usage: 42.2 MB, less than 79.63% of JavaScript online submissions for Running Sum of 1d Array.

Time Complexity: O(n) because we only loop throuhg array once
Space Complexity: O(1) because we aren't creating new space, just changing the 

*/

/*
 ************************************************************************
 ************************************************************************
 ************************************************************************
 */

/*
Naive solution below:

Time complexity: O(n^2) because it's a loop in a loop
Space complexity: O(n) because we are making an array the same size as nums.

Runtime: 93 ms, faster than 67.69% of JavaScript online submissions for Running Sum of 1d Array.
Memory Usage: 42.3 MB, less than 60.13% of JavaScript online submissions for Running Sum of 1d Array.

This version works, but I wanted to optimize it from O(n^2) Time Complexity and O(n) space complexity. 
*/

/*var runningSum = function (nums) {
  let newArray = [];
  let count = 0;
  let placeValue = 1;
  let totalNums = 0;
  for (var i = 0; i < nums.length; i++) {
    while (count < placeValue) {
      totalNums += nums[count];
      count++;
    }
    newArray.push(totalNums);
    totalNums = 0;
    count = 0;
    placeValue++;
  }
  //console.log(newArray);
  return newArray;
};

var nums = [3, 1, 2, 10, 1];
runningSum(nums);
*/

//Pseudocode:
/*
NewArray = an empty array that will be returned
count = used for loop inside loop to go through each spot in nums
placeValue = 1 // variable to keep track of how deep we are in the array
totalNum = used to add the values in the internal loop

for loop for each one
	while count is less than placeVlaue
		totalNums += nums[count]
		increase count value
	push totalNums to newArray
	totalNums = 0;
	increase placeValue by 1
	set count to 0
return newArray;
*/
