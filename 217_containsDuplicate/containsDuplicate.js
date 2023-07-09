var containsDuplicate = function (nums) {
  let hash = {};

  for (var i = 0; i < nums.length; i++) {
    let key = nums[i];
    hash[key] = hash[key] + 1 || 1;
  }

  for (var i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (hash[key] >= 2) {
      return true;
    }
  }
  return false;
};

let arr = [1, 2, 3];
console.log(containsDuplicate(arr));

/*
Ways to go about it:

1) Loop in a loop method
Using two loops, you can compare every items starting at one and then moving down the list again and again.

TIME: O(n^2)
SPACE: O(1)

2) Sort method
Using the javascript .sort() method on the array. You can organize the array from smallest to largest, move down the list, and 
compare each number one at a time.

TIME: O(n log n) - .sort()
SPACE: O(1) - Taking existing array a


3) Hashtable lookup
All values to hashtable
if value is 2 or greater, return true.

*/
