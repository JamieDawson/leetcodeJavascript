var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

search(nums, target);

/*
1. Find the middle of the array
2. if the middle is smaller than the target, go right. set helped to lenght -1
3. if the middle is larger than the target, go left. set helper to 0

*/

/*
  let left = 0;
  let right = nums.length - 1;
  let middle = nums.length / 2;

  while (left <= right) {
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
  */
