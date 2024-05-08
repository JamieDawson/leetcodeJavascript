/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  let id = 0;
  let tempArray = [];
  let result = [];

  const backtracking = (id, target, tempArray) => {
    if (target === 0) {
      result.push([...tempArray]);
      return;
    }

    if (target < 0) return;

    for (let i = id; i < candidates.length; i++) {
      tempArray.push(candidates[i]);
      backtracking(i, target - candidates[i], tempArray);
      tempArray.pop();
    }
  };

  backtracking(id, target, tempArray);
  return result;
};

var candidates = [2, 3, 5];
var target = 8;

combinationSum(candidates, target);
