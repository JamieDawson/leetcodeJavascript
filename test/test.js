function findStep(n) {
  if (n == 0) return 1;
  else if (n < 0) return 0;
  else return findStep(n - 3) + findStep(n - 2) + findStep(n - 1);
}

// Driver code

let n = 5;
console.log(findStep(n));
