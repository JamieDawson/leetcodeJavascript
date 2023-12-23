var calPoints = function (operations) {
  let stack = [];

  for (var val of operations) {
    if (val !== "C" && val !== "D" && val !== "+") {
      val = Number(val);
      stack.push(val);
    } else if (val === "C") {
      stack.pop();
    } else if (val === "D") {
      let lastIndex = stack.length - 1;
      let getDoubleVal = stack[lastIndex] * 2;
      stack.push(getDoubleVal);
    } else if (val === "+") {
      let lastI = stack.length - 1;
      let lastISecond = stack.length - 2;
      stack.push(stack[lastI] + stack[lastISecond]);
    }
  }
  stack = stack.reduce((a, b) => a + b, 0);
  return stack;
};
