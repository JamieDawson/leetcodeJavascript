class NodeTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let dfs = (root) => {
  let stack = [root];
  let children = [];

  while (stack.length > 0) {
    let current = stack.pop();

    if (!current.left && !current.right) {
      children.push(current.val);
    }
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return children;
};

let one = new NodeTree(1);
let two = new NodeTree(2);
let three = new NodeTree(3);
let four = new NodeTree(4);
let five = new NodeTree(5);
let six = new NodeTree(6);
let seven = new NodeTree(7);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;

console.log(dfs(one));


Hashmap 
DFS
Create a copy of hte node