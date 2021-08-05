function NodeTree(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

var levelOrder = function (root) {
	if (!root) {
		return [];
	}
	const queue = [root];
	const levels = [];
	while (queue.length) {
		//console.log(queue.length);
		let size = queue.length;
		const currentLevel = [];
		while (size > 0) {
			size--;
			const item = queue.shift();
			currentLevel.push(item.val);
			if (item.left) queue.push(item.left);
			if (item.right) queue.push(item.right);
		}
		levels.push(currentLevel);
	}
	return levels;
};

//var levelOrder = function (root) {
//if the root is null
//return []

//root holder
//level holder

//while the root has a size
//store the node in the queue with .shift()

//if the right exist, push it
//if the left exist, push it.

//return levels

//};

let node1 = new NodeTree(3);
let node2 = new NodeTree(9);
let node3 = new NodeTree(20);
let node4 = new NodeTree(15);
let node5 = new NodeTree(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;
let end = levelOrder(node1);
console.log(end);

/*
var levelOrder = function (root) {
	if (!root) {
		return [];
	}
	const queue = [root];
	const levels = [];
	while (queue.length) {
		//console.log(queue.length);
		let size = queue.length;
		const currentLevel = [];
		while (size > 0) {
			size--;
			const item = queue.shift();
			currentLevel.push(item.val);
			if (item.left) queue.push(item.left);
			if (item.right) queue.push(item.right);
		}
		levels.push(currentLevel);
	}
	return levels;
};
*/
