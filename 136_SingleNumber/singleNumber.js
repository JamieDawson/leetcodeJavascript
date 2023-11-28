var singleNumber = function (nums) {
  let xor = 0;
  for (num of nums) {
    xor ^= num;
  }
  return xor;
};
let nums = [2, 2, 1];
console.log(singleNumber(nums));
