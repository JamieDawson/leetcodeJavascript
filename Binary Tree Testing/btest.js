function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var deepestLeavesSum = function (root) {
  let arr = [[]];

  arr[arr.length].push(root[0]);

  arr[arr.length].push(root[1]);

  arr[arr.length].push(root[2]);

  console.log(arr);
};

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);
let eight = new TreeNode(8);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
four.left = seven;
three.right = six;
six.right = eight;

let testArr = [1, 2, 3, 4, 5, 6];
deepestLeavesSum(testArr);

/*

Create hashmap


*/
