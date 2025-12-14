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

function twoSum(nums: number[], target: number): number[] {
  let myHash = {};

  for (let i = 0; i < nums.length; i++) {
    let val = target - nums[i];
    if (myHash[val] !== undefined) {
      return [i, myHash[val]];
    }

    myHash[nums[i]] = i;
  }
}

/*
myhash = {
    2: 0
    7: 1
    11: 2
    15: 3
}

*/
