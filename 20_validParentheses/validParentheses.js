var isValid = function (s) {
	const stack = [];

	for (let char of s) {
		if (char == '(' || char == '[' || char == '{') {
			stack.push(char);
		} else {
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
	}
	if (stack.length) {
		return false;
	} else {
		return true;
	}
};

let s = '([{}])';

isValid(s);
