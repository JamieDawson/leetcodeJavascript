// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, sum = 0, results = []) {
  if (root === null) return;
  let currentSum = root.value + sum;

  if (root.left === null && root.right === null) results.push(currentSum);

  branchSums(root.left, currentSum, results);
  branchSums(root.right, currentSum, results);
  return results;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
