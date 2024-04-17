/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var reverse = function (left, right, arr) {
  while (left < right) {
    let vLeft = arr[left];
    arr[left] = arr[right];
    arr[right] = vLeft;
    right--;
    left++;
  }
};

var rotate = function (nums, k) {
  k = k %= nums.length;
  reverse(0, nums.length - 1, nums);
  reverse(0, k - 1, nums);
  reverse(k, nums.length - 1, nums);
};

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

rotate(nums, k);
