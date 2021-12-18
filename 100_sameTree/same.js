class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var isSameTree = function(p, q) {
    if(!p  && !q ) {
        return true;
    }
    if(!p || !q || p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right,  q.right);
}


const pOne = new TreeNode(1);
const pTwo = new TreeNode(2);
const pThree = new TreeNode(3);

const qOne = new TreeNode(1);
const qTwo = new TreeNode(2);
const qThree = new TreeNode(3);

pOne.left = pTwo;
pOne.right = pThree;
qOne.left = qTwo;
qOne.right = qThree;

isSameTree(pOne, qOne);
