/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.arr = [];
  this.size = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.arr.length < this.size) {
    return this.arr.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.arr.length > 0) {
    return this.arr.pop();
  } else {
    return -1;
  }
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  if (this.arr.length < k) {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] += val;
    }
  } else {
    for (let i = 0; i < k; i++) {
      this.arr[i] += val;
    }
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
