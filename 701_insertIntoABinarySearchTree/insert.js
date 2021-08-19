function TreeNode(val) {
	this.val = val;
	this.right = null;
	this.left = null;
}

// var insertIntoBST = function(root, val) {
//     if(!root) {
//         return new TreeNode(val);
//     }
//     if(val > root.val){
//         root.right = insertIntoBST(root.right, val);
//     }
//     else {
//         root.left = insertIntoBST(root.left, val);
//     }
//     return root;
// };

var insertIntoBST = function(root, val) {
	if(!root) {
		return new TreeNode(val);
	}

	if(val > root.val) {
		root.right = insertIntoBST(root.right, val);
	}
	if(val < root.val) {
		root.left = insertIntoBST(root.left, val);
	}
	return root;
};

let node4 = new TreeNode(4);
let node2 = new TreeNode(2);
let node7 = new TreeNode(7);
let node1 = new TreeNode(1);
let node3 = new TreeNode(3);

node4.left = node2;
node4.right = node7;
node2.left = node1;
node2.right = node3;

let val = 5;

let done = insertIntoBST(node4, val);
console.log(done);
