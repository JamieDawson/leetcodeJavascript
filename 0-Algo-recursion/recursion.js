let recursion = (i) => {
	if (i == 5) {
		console.log(i);
		return i;
	}

	if (i < 5) {
		recursion(i + 1);
	}
};

let i = 0;
recursion(i);
