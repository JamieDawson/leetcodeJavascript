let selectionSort = (arr) => {
	for (var i = 0; i < arr.length; i++) {
		var min = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		if (min !== i) {
			let temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
	console.log(arr);
	return arr;
};

let unsortedArray = [3, 2, 4, 1];
selectionSort(unsortedArray);
