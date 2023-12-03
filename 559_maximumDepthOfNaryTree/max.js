function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var maxDepth = function (root) {
  if (!root) return 0;

  let queue = [root];
  let count = 0;

  while (queue.length > 0) {
    let len = queue.length;

    for (var i = 0; i < len; i++) {
      let current = queue.shift();
      for (let child of current.children) queue.push(child);
    }
    count++;
  }
  return count;
};
