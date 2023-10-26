const selectionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let foundMin = i;
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < arr[foundMin]) foundMin = j;
    }
    if (foundMin !== i) {
      let temp = arr[i];
      arr[i] = arr[foundMin];
      arr[foundMin] = temp;
    }
  }
  console.log(arr);
  return arr;
};

let arr = [2, 8, 5, 3, 9, 4, 1];

selectionSort(arr);
