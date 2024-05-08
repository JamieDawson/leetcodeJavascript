/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var reverseArray = () => {};

var rotate = function (nums, k) {
  k = (k % nums.length) - 1;
};

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

rotate(nums, k);
