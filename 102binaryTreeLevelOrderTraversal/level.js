function NodeTree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    let queue = [[root, 0]];
    let final = []

    while(queue.length > 0){
        let [current, num] = queue.shift() as [TreeNode, number];

        if(!final[num]){
            final.push([]);
            final[num].push(current.val)
        } else {
            final[num].push(current.val)
        }

        if(current.left) queue.push([current.left, num + 1]);
        if(current.right) queue.push([current.right, num + 1]);

    }

    return final
};

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



