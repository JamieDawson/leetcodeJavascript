function NodeTree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let levels = [];

  while (queue.length > 0) {
    let queueLength = queue.length;
    let currentLevel = [];

    for (let i = 0; i < queueLength; i++) {
      let current = queue.shift();

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      currentLevel.push(current.val);
    }
    levels.push(currentLevel);
  }
  return levels;
};

let node1 = new NodeTree(3);
let node2 = new NodeTree(9);
let node3 = new NodeTree(20);
let node4 = new NodeTree(15);
let node5 = new NodeTree(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;
let end = levelOrder(node1);
console.log(end);
