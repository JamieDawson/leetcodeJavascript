function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

var increasingBST = function (root) {
	let head = new TreeNode('dummy');
	let curser = head;

	inorder(root);

	return head.right;

	function inorder(node) {
		if (!node) return;

		inorder(node.left);
		curser.right = new TreeNode(node.val);
		curser = curser.right;
		inorder(node.right);
	}
};

let node5 = new TreeNode(5);
let node3 = new TreeNode(3);
let node6 = new TreeNode(6);
let node2 = new TreeNode(2);
let node4 = new TreeNode(4);
let node8 = new TreeNode(8);
let node1 = new TreeNode(1);
let node7 = new TreeNode(7);
let node9 = new TreeNode(9);

node5.left = node3;
node5.right = node6;
node3.left = node2;
node3.right = node4;
node2.left = node1;
node6.right = node8;
node8.left = node7;
node8.right = node9;

increasingBST(node5);
