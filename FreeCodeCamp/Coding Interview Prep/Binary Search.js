function binarySearch(searchList, value) {
  const arrayPath = [];

  // set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  while (searchList[middle] !== value) {
    arrayPath.push(searchList[middle]);

    if (right < left) {
      return "Value Not Found";
    }

    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }
  }

  arrayPath.push(searchList[middle]);

  return arrayPath;
}

const testArray = [1, 2, 3, 4, 5, 6, 7];

let num = 5;

binarySearch(testArray, num);
