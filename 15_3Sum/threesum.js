var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];

  for (var i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      sum = a + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([a, nums[l], nums[r]]);
        l++;
        r--;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
};

let nums = [-1, 0, 1, 2, -1, -4];

threeSum(nums);

/*
Sort input array
a starts at the beginning.
use left adn right (similiar to two sum ii) to find "b" and "c"
https://leetcode.com/problems/3sum/solutions/3416585/c-java-python-javascript-fully-explained-two-pointer-array/
*/
