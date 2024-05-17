var minSubArrayLen = function (target, nums) {
  let prevTotal = 0;
  let lowestRunCount = 0;

  for (let i = 0; i < nums.length; i++) {
    prevTotal += nums[i];
    lowestRunCount++;

    if (prevTotal >= target) {
      break;
    }
  }

  if (prevTotal < target) return 0;

  for (let i = 1; i < nums.length; i++) {
    const currentTotal = prevTotal - nums[i - 1];
    if (currentTotal >= target) {
      lowestRunCount--;
      prevTotal = currentTotal;
    } else {
      prevTotal = currentTotal + nums[i + lowestRunCount - 1];
    }
  }

  return lowestRunCount;
};

let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
minSubArrayLen(target, nums);
