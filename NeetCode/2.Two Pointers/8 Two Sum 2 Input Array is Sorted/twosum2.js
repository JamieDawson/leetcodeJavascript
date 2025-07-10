var twoSum = function (numbers, target) {
  let hashTable = {};

  for (let i = 0; i < numbers.length; i++) {
    let current = target - numbers[i];
    if (hashTable[current] !== undefined) {
      //  console.log(i, hashTable[current] + 1)
      return [hashTable[current] + 1, i + 1];
    }
    hashTable[numbers[i]] = i;
  }
};

/*
IDEA 1: 
TIME: O(N) - going through numbers once!
SPACE: O(N) - Creating hash table size of numbers array.

This code takes the exact same code as Two Sum, but just increases the i and key value by 1 in the return.
Create hashtable 

{
    0: 2,
    1: 7,
    2: 11,
    3: 15
}

loop through numbers. 
    if( target - current numer is a value in the hashtalb)
        return an array of [i + 1 and that key + 1]



IDEA 2:
This is similar to how I solved Lowest Common Ancestor of a Binary Search Tree, which is  a Medium!

Use two pointers
store value: current = l + right

If current is GREAT THAN target
    r--
else if current is LESS THAN target
    l++
else 
    return [l + 1, r + 1]


TIME: O(n) -> going through numbers once
SPACE: O(1) -> Just creating two pointer

*/

var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    let current = numbers[l] + numbers[r];
    if (current > target) {
      r--;
    } else if (current < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
};
