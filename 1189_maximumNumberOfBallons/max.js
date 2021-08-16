var maxNumberOfBalloons = function (text) {
	let ballons = 0;
	const map = {};

	for (const letter of text) {
		if (map[letter]) {
			map[letter] += 1;
		} else {
			map[letter] = 1;
		}
	}

	while (map.b && map.a && map.l >= 2 && map.o >= 2 && map.n) {
		ballons += 1;
		map.b -= 1;
		map.a -= 1;
		map.l -= 2;
		map.o -= 2;
		map.n -= 1;
	}

	return ballons;
};

let text = 'balloon';
let done = maxNumberOfBalloons(text);
console.log(done);
