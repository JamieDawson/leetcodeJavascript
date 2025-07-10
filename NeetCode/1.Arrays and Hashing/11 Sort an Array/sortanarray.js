function mergeSort(arr) {
  // Base case: arrays with 1 or 0 elements are already sorted
  if (arr.length <= 1) return arr;

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort each half and then merge them
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  // Compare each item and push the smaller one to the result
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift()); // take from left
    } else {
      result.push(right.shift()); // take from right
    }
  }

  // If anything is left in either half, add it to the result
  return result.concat(left, right);
}

// Example
const numbers = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(numbers)); // [3, 9, 10, 27, 38, 43, 82]
