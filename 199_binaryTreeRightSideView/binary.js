function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var rightSideView = function (root, level = 0, rightSide = []) {
  const isBaseCase = root === null;
  if (isBaseCase) return rightSide;

  const isLastNode = level === rightSide.length;
  if (isLastNode) rightSide.push(root.val);

  return dfs(root, level, rightSide);
};

const dfs = (root, level, rightSide) => {
  if (root.right) rightSideView(root.right, level + 1, rightSide);
  if (root.left) rightSideView(root.left, level + 1, rightSide);

  return rightSide;
};
