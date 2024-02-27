function exclusiveTime(n, logs) {
  const exclusiveTimes = new Array(n).fill(0);
  const stack = [];

  for (const log of logs) {
    const [functionId, action, timestamp] = log
      .split(":")
      .map((item) => (isNaN(item) ? item : parseInt(item)));

    if (action === "start") {
      if (stack.length > 0) {
        const prevFunctionId = stack[stack.length - 1][0];
        exclusiveTimes[prevFunctionId] +=
          timestamp - stack[stack.length - 1][1];
      }
      stack.push([functionId, timestamp]);
    } else {
      const [startFunctionId, startTime] = stack.pop();
      exclusiveTimes[startFunctionId] += timestamp - startTime + 1;
      if (stack.length > 0) {
        stack[stack.length - 1][1] = timestamp + 1;
      }
    }
  }

  return exclusiveTimes;
}

// Example usage:
const n = 3;
const logs = [
  "0:start:0",
  "2:start:4",
  "2:end:5",
  "1:start:7",
  "1:end:10",
  "0:end:11",
];
const result = exclusiveTime(n, logs);
console.log(result);
