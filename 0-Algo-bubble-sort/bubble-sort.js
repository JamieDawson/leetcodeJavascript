let bubbleSort = (arr) => {
	let len = arr.length - 1;
	let swap = false;

	do {
		swap = false;
		for (var i = 0; i < len; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swap = true;
			}
		}
		len--;
	} while (swap);
	console.log(arr);
	return arr;
};

let arr = [1, 3, 6, 5, 4, 2];
bubbleSort(arr);

/*
bool value set to false
lenght value of array

while swapped is true, do this:
    go through array    
        if ith item is bigger than ith+1 item
            swap
    if no swaps
        QUIT



*/
