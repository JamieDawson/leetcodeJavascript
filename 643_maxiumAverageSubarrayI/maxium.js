var findMaxAverage = function (nums, k) {
  let highest = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= k - 1) {
      if (sum / k > highest) highest = sum / k;
      sum -= nums[i - k + 1];
    }
  }
  return highest;
};

let nums = [1, 12, -5, -6, 50, 3];
let k = 4;
findMaxAverage(nums, k);
