function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var balanceBST = function (root) {
  let arr = []; //holds inorder Traveral
  inOrder(root, arr);
  return buildTree(arr);
};

var inOrder = (root, arr) => {
  if (!root) return null;

  inOrder(root.left, arr);
  arr.push(root.val);
  inOrder(root.right, arr);
};

var buildTree = (arr) => {
  if (arr.length === 0) return null;

  let mid = Math.floor(arr.length / 2);
  let head = new TreeNode(arr[mid]);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid + 1);

  head.left = buildTree(left);
  head.right = buildTree(right);

  return head;
};

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);

one.right = two;
two.right = three;
three.right = four;

balanceBST(one);
/*
Steps:
1) BST and inOrder traversal gives us an array of the numbers in order. ex: [1,2,3,4]
2) Use the new array and use math.floor() to find the middle. All times to the left go to the leftside 
of the tree and all right side items go to right side of tree   [1,2,3,4]  (grabs 2)
3) Use recursion to populate the new tree.
*/
