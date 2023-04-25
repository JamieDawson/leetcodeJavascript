let myHash = {};

for (var i = 0; i < nums.length; i++) {
  let current = nums[i];
  let numToFind = target - current;

  if (myHash[numToFind] !== undefined) {
    return [myHash[numToFind], i];
  } else {
    myHash[current] = i;
  }
}
