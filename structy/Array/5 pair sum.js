const pairSum = (numbers, targetSum) => {
  const previousNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;

    if (complement in previousNums) {
      return [i, previousNums[complement]];
    }

    previousNums[num] = i;
  }
};

pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
