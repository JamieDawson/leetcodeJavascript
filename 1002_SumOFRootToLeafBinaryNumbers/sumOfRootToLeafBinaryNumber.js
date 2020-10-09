var sumRootToLeaf = function (root) {
	function callDFS(node, str) {
		console.log(str);
		if (!node) return 0;
		str += node.val;
		if (!node.left && !node.right) return parseInt(str, 2);
		return callDFS(node.right, str) + callDFS(node.left, str);
	}
	return callDFS(root, '');
};
