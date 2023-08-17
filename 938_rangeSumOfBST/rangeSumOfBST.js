function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var rangeSumBST = function (root, L, R) {
  var sum = 0;
  if (root == null) {
    return sum;
  }

  if (root.val >= L && root.val <= R) {
    sum += root.val;
  }
  if (root.val > L) {
    sum += rangeSumBST(root.left, L, R);
  }
  if (root.val < R) {
    sum += rangeSumBST(root.right, L, R);
  }

  return sum;
};

let ten = new TreeNode(10);
let five = new TreeNode(5);
let fifteen = new TreeNode(15);
let three = new TreeNode(3);
let seven = new TreeNode(7);
let eighteen = new TreeNode(18);

ten.left = five;
ten.right = fifteen;
five.left = three;
five.right = seven;
fifteen.right = eighteen;

let L = 7;
let R = 15;
console.log(rangeSumBST(ten, L, R));
