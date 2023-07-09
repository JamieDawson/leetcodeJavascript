function TreeNode(val) {
  this.val = val;
  this.right = null;
  this.left = null;
}

var maxDepth = function (root) {
  if (!root) return 0;

  const nodesToCheck = [[root, 1]];
  let maxDepth = 0;

  while (nodesToCheck.length) {
    const [currentNode, level] = nodesToCheck.pop();
    console.log(currentNode, level);

    if (currentNode.right) nodesToCheck.push([currentNode.right, level + 1]);
    if (currentNode.left) nodesToCheck.push([currentNode.left, level + 1]);

    maxDepth = Math.max(maxDepth, level);
  }

  return maxDepth;
};

let node3 = new TreeNode(3);
let node9 = new TreeNode(9);
let node20 = new TreeNode(20);
let node15 = new TreeNode(15);
let node7 = new TreeNode(7);

node3.left = node9;
node3.right = node20;
node20.left = node15;
node20.right = node7;

let done = maxDepth(node3);
