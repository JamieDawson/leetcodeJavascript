var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[low] <= nums[mid]) {
      //the first half is ordered
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      //the first half is NOT ordered, so the right half is.
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};
var nums = [4, 5, 6, 7, 0, 1, 2];
var target = 0;

search(nums, target);

/*
check right side:
if target is less than or equal to middle-1

*/
