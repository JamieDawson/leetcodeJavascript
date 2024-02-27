function isPrime(n) {
  for (let i = 1; i <= n; i++) {
    if (i !== 1 && i !== n && n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(0));
