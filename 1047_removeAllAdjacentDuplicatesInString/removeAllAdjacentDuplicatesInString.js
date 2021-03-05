var removeDuplicates = function (S) {
	const stack = [];
	for (const char of S) {
		stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
		console.log(stack);
	}
	//	console.log(stack);
	return stack.join('');
};

var S = 'abbaca';
removeDuplicates(S);
