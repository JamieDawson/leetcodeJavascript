function TreeNode(val) {
  this.val = val;
  this.right = null;
  this.left = null;
}

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let left = maxDepth(root.left) + 1;
  let right = maxDepth(root.right) + 1;

  return Math.max(left, right);
};

/*
let node3 = new TreeNode(3);
let node9 = new TreeNode(9);
let node20 = new TreeNode(20);
let node15 = new TreeNode(15);
let node7 = new TreeNode(7);

node3.left = node9;
node3.right = node20;
node20.left = node15;
node20.right = node7;
*/

let node1 = new TreeNode(1);

let done = maxDepth(node1);
console.log(done);

//Not with Recursion:

var moveZeroes = function (nums) {
  let index = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  for (var i = index; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

/*
Create index var at 0

loop thoruhg array
    if current value isn't 0
        use the index to set the the array value
        increase the index

loop through array again starting at index
    set the rest of the values to 0

return nums
*/
