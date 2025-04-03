var majorityElement = function (nums) {
  let myMap = new Map();
  let maxCount = 0;
  let maxElement = nums[0];

  for (let val of nums) {
    if (!myMap.has(val)) {
      myMap.set(val, 1);
    } else {
      myMap.set(val, myMap.get(val) + 1);
    }
    if (myMap.get(val) >= maxCount) {
      maxCount = myMap.get(val);
      maxElement = val;
    }
  }

  return maxElement;
};

/*
3: 2
2: 1

Mistakes made:
1) Creating the hashMap incorrectly.
2) Not returning maxElement.

Improve on:
1) Using Map() and it's functionality
2) Double-checking return value
*/
