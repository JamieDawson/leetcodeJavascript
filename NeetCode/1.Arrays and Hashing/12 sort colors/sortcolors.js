var sortColors = function (nums) {
  let countArr = Array(3).fill(0);
  console.log(countArr);

  for (var i = 0; i < nums.length; i++) {
    countArr[nums[i]]++;
  }
  console.log(countArr);

  let apply = 0;

  for (var i = 0; i < 3; i++) {
    let size = countArr[i];
    for (var j = 0; j < size; j++) {
      nums[apply] = i;
      apply++;
    }
  }
  console.log(nums);
  return nums;
};

/*
Create array showing how many times a number appears for each spot: 
Example input: nums = [2,0,2,1,1,0] turns into ==> [2, 2, 2]

Loop through that to change the values in-place.

while loop that goes til it reaches 3.
    while loop that grabs 0,1,and 2 values in

*/
