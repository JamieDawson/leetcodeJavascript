function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

var searchBST = function (root, val) {
	let curr = root;

	while (curr && curr.val !== val) {
		if (val < curr.val) {
			curr = curr.left;
		} else if (val > curr.val) {
			curr = curr.right;
		}
	}
	return curr;
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

let val = 2;
let done = searchBST(node4, val);
console.log(done);

/*
while the nodetree exist
    //if this node is the value
        return it.
*/
