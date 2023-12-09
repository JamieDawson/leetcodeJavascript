class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const depthFirstvalues = (root) => {
  let stack = [root];

  while (stack.length > 0) {
    let current = stack.pop(); // top of stack
    console.log(current.val);

    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirstvalues(a);
