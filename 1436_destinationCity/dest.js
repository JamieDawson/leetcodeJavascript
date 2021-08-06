var destCity = function (paths) {
	let hash = new Map();
	let dest;

	for (var i = 0; i < paths.length; i++) {
		hash.set(paths[i][0], 0);
	}
	console.log(hash);

	for (var i = 0; i < paths.length; i++) {
		console.log(hash.has(paths[i][1]));
		if (!hash.has(paths[i][1])) {
			dest = paths[i][1];
		}
	}
	//console.log(dest);
	return dest;
};

let paths = [
	['London', 'New York'],
	['New York', 'Lima'],
	['Lima', 'Sao Paulo'],
];
destCity(paths);
