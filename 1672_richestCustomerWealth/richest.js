var maximumWealth = function (accounts) {
	let i = 0;
	let big = 0;
	let check;
	while (accounts[i]) {
		check = 0;
		for (var j = 0; j < accounts[i].length; j++) {
			check = check + accounts[i][j];
		}
		console.log(check);
		if (check > big) {
			big = check;
		}
		i++;
	}
	return big;
};

let accounts = [
	[1, 2, 3],
	[3, 2, 1],
];
maximumWealth(accounts);
