var countValues = (value, mySet, numSize) => {
  let countingValues = 0;

  for (var i = 0; i < numSize; i++) {
    if (mySet.has(value++)) {
      countingValues++;
    } else {
      break;
    }
  }
  return countingValues;
};

var longestConsecutive = function (nums) {
  if (nums.length <= 0) return 0;

  let mySet = new Set(nums);
  let counter = 1;
  let numSize = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (!mySet.has(nums[i] - 1)) {
      counter = Math.max(counter, countValues(nums[i], mySet, numSize));
    }
  }

  return counter;
};

let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));

/*

Example:  
nums = [100, 4, 200, 1, 3, 2]

Sequence:  1,2,3,4   100    200

1) Take array and turn it into a set
2) find the "stars" of the sequence by seeing if there's no 

*/
