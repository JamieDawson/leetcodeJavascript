class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q || p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

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

//my solution:

/*
var isSameTree = function(p, q) {
    if(p === null && q !== null || p !== null && q === null) return false;

    if(p === null || q === null){
        return true;
    } 

    let pStack = [[p, "left", 1]];
    let qStack = [[q, "left", 1]];

    while(pStack.length > 0 && qStack.length > 0) {
        let [pCurrent, pSide, pLevel] = pStack.shift();
        let [qCurrent, qSide, qLevel] = qStack.shift();

        if(pCurrent.left) pStack.push([pCurrent.left, "left", pLevel + 1]);
        if(pCurrent.right) pStack.push([pCurrent.right, "right", pLevel + 1]);
        if(qCurrent.left) qStack.push([qCurrent.left, "left", qLevel + 1]);
        if(qCurrent.right) qStack.push([qCurrent.right, "right", qLevel + 1]);

        if(pCurrent.val !== qCurrent.val || pSide !== qSide || pLevel !== qLevel) {
            return false;
        } 
    }

    if(pStack.length > 0 || qStack.length > 0) {
        return false;
    } 

    return true;
    
};
*/
