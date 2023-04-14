var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let dp = new Array(nums.length).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (var i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[dp.length - 1];
};

/*
if lenght is 0
    return 0
if length is 1
    return nums[1]

dp = an array and fill it with 0's equal to nums size

Add the first value in nums to first spot in new array
add the 1st or 2nd value to dp, depending which is bigger

for loop starting at 2, end at end of nums
    current dp spot = check nums + dp-2 spot OR dp-1 spot. Pick biggest

return end of array
*/
