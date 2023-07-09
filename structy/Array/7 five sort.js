const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] !== 5 && nums[j] !== 5) {
      i++;
    } else if (nums[i] !== 5 && nums[j] === 5) {
      i++;
    } else if (nums[i] === 5 && nums[j] !== 5) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    } else if (nums[i] === 5 && nums[j] === 5) {
      j--;
    }
  }
  console.log(nums);
  return nums;
};

fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]
/*
cases:

1) i and j aren't 5
    i++
2)  i isn't 5 and j is 5
    i++
3) i is 5 and j isn't
    swap value 
    move i up and j down
4) both i and j are 5
    move j down

*/
