/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.arr = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let newArr = [];
  while (left <= right) {
    newArr.push(this.arr[left]);
    left++;
  }

  let sumAll = newArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(sumAll);
  return sumAll;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
