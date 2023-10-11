class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var levelOrder = function (root) {
  let arr = [[]];
  let curr = root;

  while (curr) {
    arr.push([0][[curr.val]]);
    curr = curr.right;
  }
  console.log(arr);
};

let three = new TreeNode(3);
let nine = new TreeNode(9);
let twenty = new TreeNode(20);
let fifteen = new TreeNode(15);
let seven = new TreeNode(7);

three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = seven;

levelOrder(three);
