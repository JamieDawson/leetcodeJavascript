function TreeNode(val) {
  this.val = val;
  this.right = null;
  this.left = null;
}

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;

    let queue = [[root, 1]];
    let maxDepth = 0

    while(queue.length){
        let [current, depth] = queue.pop() as [TreeNode, number];

        if(current.left) queue.push([current.left, depth + 1]);
        if(current.right) queue.push([current.right, depth + 1])

        maxDepth = Math.max(maxDepth, depth);
    }

    return maxDepth
};

let node3 = new TreeNode(3);
let node9 = new TreeNode(9);
let node20 = new TreeNode(20);
let node15 = new TreeNode(15);
let node7 = new TreeNode(7);

node3.left = node9;
node3.right = node20;
node20.left = node15;
node20.right = node7;

let done = maxDepth(node3);
