var test = function (test) {
	let i = 3;
	let j = 4;
	let k = 1;

	for (i = 0; i < 3; i++) {
		k += j;
		j = j - 1;
	}
};

let done = test();

console.log(done);
