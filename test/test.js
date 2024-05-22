class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const testQueue = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = right - left / 2;
    if (arr[middle] === target) {
      return middle;
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else if (target > arr[middle]) {
      left = middle + 1;
    }
  }

  return -1;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 18;

console.log(testQueue(arr, target));

/*
Binary search
right = 0
left = end of arr.
middle = end - right / 2

while left is greater than right
  if middle is target
    return i
  if target < middle
    left = middle - 1;

  if target > middle
    right = middle + 1

  return -1

*/
