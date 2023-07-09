class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const howHigh = (node) => {
  if (!node) return null;
  let level = 0;
  let stackDFS = [[node, level]];

  while (stackDFS.length > 0) {
    let current = stackDFS.pop();
    console.log(current);

    if (current.right) stackDFS.push([current.right, level++]);
    if (current.left) stackDFS.push([current.left, level++]);
  }
  return level;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(howHigh(a)); // -> 2
