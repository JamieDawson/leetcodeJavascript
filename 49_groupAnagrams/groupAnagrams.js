var groupAnagrams = function (strs) {
	const ht = {};
	for (let str of strs) {
		const sorted = str.split('').sort().join(''); //method chaning.
		//'abc -> ['a','b','c'].sorted() -> join() = 'abc'

		if (ht[sorted]) ht[sorted].push(str);
		else ht[sorted] = [str];
	}
	return Object.values(ht); //Pulls off all values and throws away keys.
};

//done
