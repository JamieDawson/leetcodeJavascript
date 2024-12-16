var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }

  /*
 while left is LESS THAN right
     if numbers(left) + numbers(right) === target
        return left and right in an array

      if numbers(left) + right > target
        move right down
      else
        move left up.

 */
};

let numbers = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(numbers, target));

//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/2799628/easy-clear-and-classic-javascript-solution-two-sum-ii-input-array-is-sorted/

/*
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  */
