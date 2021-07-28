var restoreString = function (s, indices) {
	let hash = {};
	let empty = [];
	let i = 0;
	while (i < indices.length) {
		hash[indices[i]] = s[i];
		i++;
	}

	i = 0;
	while (i < indices.length) {
		empty.push(Object.values(hash[i]));
		i++;
	}
	return empty.join('');
};

let s = 'codeleet';
let indices = [4, 5, 6, 7, 0, 2, 1, 3];

let done = restoreString(s, indices);
console.log(done);
