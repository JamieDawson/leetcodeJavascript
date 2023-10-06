// var productExceptSelf = function (nums) {
//   let leftProducts = new Array(nums.length).fill(1);
//   let rightProducts = new Array(nums.length).fill(1);
//   let output = new Array(nums.length).fill(0);

//   for (var i = 1; i < nums.length; i++) {
//     leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
//   }

//   for (var i = nums.length - 2; i >= 0; i--) {
//     rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
//   }

//   for (var i = 0; i < nums.length; i++) {
//     output[i] = leftProducts[i] * rightProducts[i];
//   }
//   return output;
// };

// let nums = [1, 2, 3, 4];
// productExceptSelf(nums);

/**
 * Array
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const result = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
  }

  return result;
}
