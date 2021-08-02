var findLucky = function (arr) {
	let hash = {};

	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
		if (hash[arr[i]]) {
			hash[arr[i]]++;
		} else {
			hash[arr[i]] = 1;
		}
	}
	//console.log(hash);
	//console.log(Object.keys(hash));
	// let test = Object.values(hash[0]);
	console.log(hash);

	// for (var i = 0; i < Object.keys(hash).length; i++) {

	// }
};

let arr = [2, 2, 3, 4];
findLucky(arr);
