var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    let isGreater = root.val < p.val && root.val < q.val;

    if (isGreater) {
      root = root.right;
      continue;
    }

    let isLess = p.val < root.val && q.val < root.val;

    if (isLess) {
      root = root.left;
      continue;
    }

    break;
  }
  return root;
};
