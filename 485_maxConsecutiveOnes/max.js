var findMaxConsecutiveOnes = function (nums) {
  let finalCounter = 0;

  for (var i = 0; i < nums.length; i++) {
    let loopCounter = 0;
    while (nums[i] === 1) {
      loopCounter++;

      if (loopCounter > finalCounter) {
        finalCounter = loopCounter;
      }
      i++;
    }
  }

  console.log(finalCounter);
  return finalCounter;
};

let nums = [1, 1, 0, 1, 1, 1];
findMaxConsecutiveOnes(nums);

/*
Time: O(n) - Only looping through nums once
Space: O(1) - Not creating extra space the size of nums. Only creating a single counter variable. 
*/
