var maxDepth = function (s) {
  let stack = [];
  let tracker = 0;

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
      tracker = Math.max(tracker, stack.length);
    } else if (char === ")") {
      stack.pop();
    }
  }
  return tracker;
};
