function merge(left, right) {
  let sortedArr = []; // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift()); //removes first instance from left array and pushes it
    } else {
      sortedArr.push(right.shift()); //removes first instance fro right array and pushes it
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let final = mergeSort([3, 5, 1, 4]); // [1, 3, 5, 5, 8, 99]
console.log(final);

//Out of place: meaning additional data structures are needed (As opposed to in place sorting)
//Stable: Two elements with equal values wi ll apepaar in the same order in the sorted outpt as they appear in the unsorte dinput.
//Array size 0 and 1 are sorted:  [] and [4] are sorted but [5,4] is not

//https://www.doabledanny.com/merge-sort-javascript
