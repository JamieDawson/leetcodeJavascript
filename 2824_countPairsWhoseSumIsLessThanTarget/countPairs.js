var countPairs = function (nums, target) {
  let count = 0;

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) count++;
    }
  }
  return count;
};

var countPairs = function (nums, target) {
  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  nums = nums.sort((a, b) => a - b);

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
};
