var twoSum = function (nums, target) {
  let myMap = new Map();

  for (var i = 0; i < nums.length; i++) {
    let check = target - nums[i];
    console.log(myMap);
    if (myMap.has(check)) {
      return [myMap.get(check), i];
    } else {
      myMap.set(nums[i], i);
    }
  }
};

let nums = [2, 7, 11, 15];
let target = 9;

twoSum(nums, target);
