const binarySearch = (arr: number[], target: number): boolean => {
  let left = 0;
  let right = arr.length - 1;
  let middle = 0;

  while (left <= right) {
    middle = Math.floor((right + left) / 2);

    if (arr[middle] === target) {
      return true;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return false;
};

function searchMatrix(matrix: number[][], target: number): boolean {
  let arrLeft = 0;
  let arrRight = matrix.length - 1;
  let middle;

  while (arrLeft <= arrRight) {
    middle = Math.floor((arrRight + arrLeft) / 2);
    //console.log("middle: ", middle,matrix[middle][0],  matrix[middle][matrix[middle].length - 1])

    if (
      target >= matrix[middle][0] &&
      target <= matrix[middle][matrix[middle].length - 1]
    ) {
      // console.log("FOUND")
      console.log(matrix[middle]);
      return binarySearch(matrix[middle], target);
      //return true;
    } else if (matrix[middle][0] > target) {
      arrRight = middle - 1;
    } else {
      arrLeft = middle + 1;
    }
  }

  return false;
}

var matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
var target = 3;

searchMatrix(matrix, target);
