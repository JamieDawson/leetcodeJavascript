// var uniqueOccurrences = function (arr) {
// 	let hashOne = new Map();

// 	for (var i = 0; i < arr.length; i++) {
// 		hashOne.set(arr[i], arr[i]);
// 	}

// 	let arrNew = hashOne.values();
// 	let hashTwo = new Set(arrNew);

//     if(hashOne.size == hashTwo.size)
//         return true;
//     return false;
// };

var uniqueOccurrences = function (arr) {
	const map = {};

	for (const number of arr) {
		if (map[number]) {
			map[number] += 1;
		} else {
			map[number] = 1;
		}
	}

	const frequencies = Object.values(map);
	const set = new Set(frequencies);

	return frequencies.length === set.size;
};

let arr = [1, 2, 2, 1, 1, 3];
uniqueOccurrences(arr);
