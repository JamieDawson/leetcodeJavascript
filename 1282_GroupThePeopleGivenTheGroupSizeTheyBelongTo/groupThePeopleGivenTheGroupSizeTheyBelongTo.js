var groupThePeople = function (groupSizes) {
	let kv = {};
	let result = [];

	for (var i = 0; i < groupSizes.length; i++) {
		const num = groupSizes[i];

		if (kv[num]) kv[num].push(i);
		else kv[num] = [i];

		if (kv[num].length === num) {
			result.push(kv[num]);
			delete kv[num];
		}
	}
	console.log(result);
	return result;
};

var groupArr = [3, 3, 3, 3, 3, 1, 3];

groupThePeople(groupArr);
