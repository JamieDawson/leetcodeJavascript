class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var isValidBST = function (root) {
  return validate(root, -Infinity, Infinity);
};

var validate = function (node, lower, upper) {
  if (node == null) {
    // empty node or empty tree
    return true;
  }

  if (lower < node.val && node.val < upper) {
    // check if all tree nodes follow BST rule
    return (
      validate(node.left, lower, node.val) &&
      validate(node.right, node.val, upper)
    );
  } else {
    // early reject when we find violation
    return false;
  }
};

let five = new TreeNode(5);
let three = new TreeNode(3);
let seven = new TreeNode(7);
let four = new TreeNode(4);
let eight = new TreeNode(8);

five.left = three;
five.right = seven;
seven.left = four;
seven.right = eight;

isValidBST(five);
