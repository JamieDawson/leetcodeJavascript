function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than current,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place current at its correct position in sorted part
    arr[j + 1] = current;
  }

  console.log(arr);
  return arr;
}

let arr = [2, 8, 5, 3, 9, 4];
insertionSort(arr);
