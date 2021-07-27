var countMatches = function (items, ruleKey, ruleValue) {
	//counter variable
	//while items length
	//if items[i][0] is rule value = increase varaible.

	let count = 0;
	for (var i = 0; i < items.length; i++) {
		if (items[i][0] == ruleValue) {
			count++;
		}
	}
	return count++;
};

let items = [
	['phone', 'blue', 'pixel'],
	['computer', 'silver', 'lenovo'],
	['phone', 'gold', 'iphone'],
];
let ruleKey = 'color';
let ruleValue = 'silver';

countMatches(items, ruleKey, ruleValue);
