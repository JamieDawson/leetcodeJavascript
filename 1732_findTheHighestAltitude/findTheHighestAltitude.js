const findTheHighestAltitude = (gain) => {
	let biggestAlt = 0;
	let current = 0;

	for (let i of gain) {
		current = current + i;
		if (current > biggestAlt) {
			biggestAlt = current;
		}
	}
	console.log(biggestAlt);
	return biggestAlt;
};

let gain = [-4, -3, -2, -1, 4, 3, 2];
findTheHighestAltitude(gain);

//var biggestAlt - holds biggest number as is.
//var current - creates a value by adding individual values
//loop through array
//math: current =  current + gain[i]
//if current is bigger than biggestAlt
//set biggestAlt to current
//return biggestAlt

//Time Complexity
// O(n). You have to loop through the array once.
