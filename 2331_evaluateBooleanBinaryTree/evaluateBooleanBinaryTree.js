function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var evaluateTree = function (root) {
  let stack = [root];
  let organized = [];

  while (stack.length > 0) {
    let current = stack.shift();
    organized.push(current);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  console.log(organized);
  while (organized.length > 0) {}
  console.log(organized[1]);
};

var compareThree = (head, left, right) => {};

let one = new TreeNode(2);
let two = new TreeNode(1);
let three = new TreeNode(3);
let four = new TreeNode(0);
let five = new TreeNode(1);

one.left = two;
one.right = three;
three.left = four;
three.right = five;

evaluateTree(one);

/*

* A full binary tree is a type of binary tree in which every node has 0 or 2 children

use BFS to store all the values in BFS order
Grab the 3 nodes at the end and compare the logic.

0 = false
1 = true
2 = or
3 = and

*/
