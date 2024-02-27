function isPrime(n) {
  let factors = Array.from({ length: n - 1 }, (_, index) => index + 2);

  for (let i = 0; i < factors.length; ) {
    if (n % factors[i] !== 0) {
      i++;
    } else {
      factors.splice(i, 1);
    }
  }

  return factors.length === 0;
}

console.log(isPrime(0));
