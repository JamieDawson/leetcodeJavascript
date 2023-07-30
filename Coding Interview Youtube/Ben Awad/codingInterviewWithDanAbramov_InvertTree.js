function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const invertTree = (root) => {
  let stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();
    stack.push(current.left);
    stack.push(current.right);
    let temp = current;
    current.right = current.left;
    current.left = temp;
  }
  return root;
};

let four = new TreeNode(4);
let two = new TreeNode(2);
let seven = new TreeNode(7);
let one = new TreeNode(1);
let three = new TreeNode(3);
let six = new TreeNode(6);
let nine = new TreeNode(9);

four.left = two;
four.right = seven;
two.left = one;
two.right = three;
seven.left = six;
seven.right = nine;

console.log(invertTree(four));

/*
        4
       / \
      2   7
     /\   /\
    1  3  6 9
*/
