class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var kthSmallest = function (root, k, inOrder = []) {
  if (!root) return inOrder;

  return dfs(root, k, inOrder);
};

const dfs = (root, k, inOrder) => {
  if (root.left) kthSmallest(root.left, k, inOrder);

  inOrder.push(root.val);

  if (root.right) kthSmallest(root.right, k, inOrder);

  return inOrder[k - 1];
};

let three = new TreeNode(3);
let one = new TreeNode(1);
let two = new TreeNode(2);
let four = new TreeNode(4);

three.left = one;
three.right = four;
one.right = two;

kthSmallest(three);

//https://www.youtube.com/watch?v=4_UDUj1j1KQ
