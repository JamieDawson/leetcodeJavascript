function threeSum(nums: number[]): number[][] {
  let ans: number[][] = [];
  nums = nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left: number = i + 1;
    let right: number = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;

        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  console.log(ans);
  return ans;
}

/*
1. Sort array
2. Iterate through array
3. Skip duplicates using continue
4. use 2 pointer method
*/

let nums = [-1, 0, 1, 2, -1, -4];

threeSum(nums);

/*
Sort input array
a starts at the beginning.
use left adn right (similiar to two sum ii) to find "b" and "c"
https://leetcode.com/problems/3sum/solutions/3416585/c-java-python-javascript-fully-explained-two-pointer-array/
*/
