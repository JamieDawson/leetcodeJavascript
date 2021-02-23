let selectionSort = (arr) => {
	for (var i = 0; i < arr.length; i++) {
		let min = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		if (min !== i) {
			let temp = arr[min];
			arr[min] = arr[i];
			arr[i] = temp;
		}
	}
	console.log(arr);
	return arr;
};

let arr = [3, 1, 2, 5, 6];
selectionSort(arr);

/*
Loop through array 1 number at a time.
	hold onto the min value.
	Loop through all items in array one to the right of the first loop
		if min is greater than current value	
			set min to current value
if min is not equal to first loop value
	swap values.

*/
