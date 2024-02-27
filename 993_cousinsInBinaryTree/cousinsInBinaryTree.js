class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var isCousins = function (root, x, y) {
  let checker = [[root, 0]];
  let bucket = [];

  while (checker.length > 0) {
    let [current, level] = checker.shift();

    if (!bucket[level]) {
      bucket.push([]);
      bucket[level].push(current.val);
    } else {
      bucket[level].push(current.val);
    }

    if (current.left !== null) checker.push([current.left, level + 1]);
    if (current.right !== null) checker.push([current.right, level + 1]);
  }

  for (var i = 0; i < bucket.length; i++) {
    let findsBoth = bucketChecker(bucket[i], x, y);
    if (findsBoth === true) {
      return true;
    }
  }

  return false;
};

const bucketChecker = (bucket, x, y) => {
  let foundX = false;
  let foundY = false;

  for (var i = 0; i < bucket.length; i++) {
    console.log(bucket[i]);
    if (bucket[i] == x) foundX = true;
    if (bucket[i] == y) foundY = true;
  }

  if (foundX === true && foundY === true) return true;

  return false;
};

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);

one.left = two;
one.right = three;
two.right = four;
three.right = five;

console.log(isCousins(one, 5, 4));

/*
Create a array to store the arrays
Create an array for the BFS [value, level]

BFS loop
    
if the level doesn't exist
    push []
    add value and level
else
    add value and level

*/

//Maybe use a graph to connect the parents?
