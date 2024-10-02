var isHappy = function (n) {
  const findNumber = (n) => {
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    return sum;
  };

  let mySet = new Set();

  while (n !== 1 && !mySet.has(n)) {
    mySet.add(n);
    n = findNumber(n);
  }

  if (n === 1) return true;

  return false;
};
