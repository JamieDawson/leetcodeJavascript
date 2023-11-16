var leftRightDifference = function (nums) {
  let left = Array(nums.length).fill(0);
  let right = Array(nums.length).fill(0);

  //apply values to left
  for (let i = 0; i < nums.length - 1; i++) {
    let n = nums[i];
    let leftNum = left[i];

    left[i + 1] = n + leftNum;
  }

  //apply values to right
  for (var i = nums.length - 1; i > 0; i--) {
    let n = nums[i];
    let rightNum = right[i];
    right[i - 1] = n + rightNum;
  }

  //add left to right
  for (var i = 0; i < nums.length; i++) {
    left[i] = Math.abs(left[i] - right[i]);
  }

  //return left because it has right values added to it.
  return left;
};

let nums = [10, 4, 8, 3];
leftRightDifference(nums);
/*
Space: O(left + right + n) = O(n)
TIME:O (n + n + n) = O(n);

*/
