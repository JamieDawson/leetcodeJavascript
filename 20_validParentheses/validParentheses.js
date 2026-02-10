var isValid = function (s) {
  let symbols = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let current = s[i];

    if (symbols[current]) {
      stack.push(current);
    } else {
      let pulled = stack.pop();
      if (symbols[pulled] !== current) {
        return false;
      }
    }
  }

  if (stack.length !== 0) return false;

  return true;
};

let s = "([{}])";

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

/*
Create a state
create a hashtabl eiht all symbols

loop thorugh s
	



*/
