var hammingWeight = function (n) {
  let count = 0;

  while (n !== 0) {
    const bitComparison = n & 1; //use bitwise & to return 0 or 1
    if (bitComparison === 1) count++;
    console.log("TEST");
    n = n >>> 1;
  }

  return count;
};

var n = 00000000000000000000000000001011;

hammingWeight(n);
