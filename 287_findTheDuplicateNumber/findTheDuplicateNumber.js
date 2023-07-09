var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow != fast) {
    // we are guaranteed to have a cycle
    console.log("first loop");
    console.log(fast);
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

let nums = [1, 3, 4, 3, 2];
findDuplicate(nums);
