var checkTree = function (root) {
  let sum = root.right.val + root.left.val;

  if (root.val === sum) return true;
  return false;
};
