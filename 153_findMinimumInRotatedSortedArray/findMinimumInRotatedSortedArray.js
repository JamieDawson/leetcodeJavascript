var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[left] < nums[right]) {
      return nums[left];
    } else if (nums[left] <= nums[mid]) {
      left = mid + 1;
    } else if (nums[mid] < nums[left]) {
      right = mid;
    }
  }

  return nums[left];
};

let nums = [2, 3, 4, 5, 1];

findMin(nums);

/*
if value in middle is greater than or equal to L
    l = mid + 1

*/
