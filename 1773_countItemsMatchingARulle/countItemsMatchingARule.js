var countMatches = function (items, ruleKey, ruleValue) {
	let counter = 0;
	let rule = -1;

	switch(ruleKey) {
		case "type":
			rule = 0;
			break;
		case "color":
			rule = 1;
			break;
		case "name":
			rule = 2;
			break;
	}

	for(var i = 0; i < items.length; i++) {
		if (items[i][rule] == ruleValue) {
			counter++;
		}
	}
	return counter;
};

let items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
let ruleKey = 'type';
let ruleValue = 'phone';

countMatches(items, ruleKey, ruleValue);


/*
counter variable: counts items in correct spot

Create rule variable call rule (type = 0, color = 1, and name = 2)

loop through array, count with i
	if arrayLocation[i][rule] is equal to ruleValue
		counter++

return counter


Time compleity: O(n): scan through the length of the array. 
Space complexity: O(1): Not creating extra space. Only creating single number variable.
*/