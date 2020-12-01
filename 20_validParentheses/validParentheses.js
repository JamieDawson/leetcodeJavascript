var isValid = function (s) {
	const stack = [];
	const pairs = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	for (let char of s) {
		if (char in pairs) {
			stack.push(char);
		} else {
			if (stack.length === 0) return false;
			const last = stack.pop();
			if (pairs[last] !== char) return false;
		}
	}
	if (stack.length) {
		return false;
	} else {
		return true;
	}
};

let s = '([{}])';

isValid(s);

//Old way to check. This can get messy quickly.
/*
else {
			if (stack.length === 0) return false;
			const last = stack.pop();
			if (last === '(' && char !== ')') {
				return false;
			} else if (last === '[' && char !== ']') {
				return false;
			} else if (last === '{' && char !== '}') {
				return false;
			}
        }
*/
