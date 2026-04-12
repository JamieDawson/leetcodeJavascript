var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  // force first move
  slow = nums[slow];
  fast = nums[nums[fast]];

  // now safe to compare
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  // Step 2
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
