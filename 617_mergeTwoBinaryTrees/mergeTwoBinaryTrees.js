function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var mergeTrees = function (t1, t2) {
  // goal is to merge t2 to t1
  // if one of the node missing, return the other
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }
  // if both nodes exist, sum the values
  t1.val += t2.val;

  // do the same thing for left and right branch
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  // return the merged t1
  return t1;
};

let rOne = new TreeNode(1);
let rThree = new TreeNode(3);
let rTwo = new TreeNode(2);
let rFive = new TreeNode(5);

rOne.left = rThree;
rOne.right = rTwo;
rThree.left = rFive;

let tTwo = new TreeNode(2);
let tOne = new TreeNode(1);
let tThree = new TreeNode(3);
let tFour = new TreeNode(4);
let tSeven = new TreeNode(7);

tTwo.left = tOne;
tTwo.right = tThree;
tOne.right = tFour;
tThree.right = tSeven;

mergeTrees(rOne, tTwo);

/*
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var mergeTrees = function (t1, t2) {
  // goal is to merge t2 to t1

  // if one of the node missing, return the other
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }
  // if both nodes exist, sum the values
  t1.val += t2.val;

  // do the same thing for left and right branch
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  // return the merged t1
  return t1;
};


*/
