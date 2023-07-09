function Node(val) {
  this.val = val === undefined ? 0 : val;
  this.left = null;
  this.right = null;
}

var sortedArrayToBST = function (nums, start = 0, end = nums.length - 1) {
  console.log(start, end);
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // console.log(mid, end)
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums, start, mid - 1);
    root.right = sortedArrayToBST(nums, mid + 1, end);
    return root;
  }
  return null;
};

let zero = new Node(0);
let negThree = new Node(-3);
let negTen = new Node(-10);
let nine = new Node(9);
let five = new Node(5);

zero.left = negThree;
zero.right = nine;
nine.left = five;
negThree.left = negTen;

sortedArrayToBST(zero);

/*




*/