var twoSum = function (nums, target) {
  let myHash = {};

  for (var i = 0; i < nums.length; i++) {
    let checkValue = target - nums[i];

    if (myHash[checkValue] !== undefined) {
      return [myHash[checkValue], i];
    } else {
      myHash[nums[i]] = i;
    }
  }
};

let nums = [2, 7, 11, 15];
let target = 9;

twoSum(nums, target);
