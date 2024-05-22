var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const findRob = (nums, start, end) => {
    if (end - start + 1 === 1) return nums[start];
    if (end - start + 1 === 2) return Math.max(nums[start], nums[start + 1]);

    let dp = new Array(end - start + 1).fill(0);

    dp[0] = nums[start];
    dp[1] = Math.max(nums[start], nums[start + 1]);

    for (var i = 2; i <= end - start; i++) {
      dp[i] = Math.max(nums[start + i] + dp[i - 2], dp[i - 1]);
    }

    return dp[end - start];
  };

  let firstRob = findRob(nums, 0, nums.length - 2);
  let secondRob = findRob(nums, 1, nums.length - 1);

  return Math.max(firstRob, secondRob);
};
let nums = [1, 2, 3, 1];
rob(nums);

/*


*/
