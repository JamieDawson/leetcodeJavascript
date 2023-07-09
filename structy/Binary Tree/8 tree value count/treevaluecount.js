class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeValueCount = (root, target) => {
  let totalTarget = 0;
  let stackBFS = [root];

  while (stackBFS.length > 0) {
    let current = stackBFS.pop();
    if (current.val === target) totalTarget++;

    if (current.right) stackBFS.push(current.right);
    if (current.left) stackBFS.push(current.left);
  }
  return totalTarget;
};

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

console.log(treeValueCount(a, 6)); // -> 3
