var removeDuplicates = function (nums) {
  let mySet = new Set();
  let i = 0;

  for (var j = 0; j < nums.length; j++) {
    if (!mySet.has(nums[j])) {
      mySet.add(nums[j]);
      let temp = nums[i];
      nums[i] = nums[j];
      i++;
    }
  }
  // console.log(mySet)
  // console.log(mySet.size)
  return mySet.size;
};

/*
Create counter = 0
Create Set()
Create poiner i = 0

craete loop for entire nums array : j = 0


*/
