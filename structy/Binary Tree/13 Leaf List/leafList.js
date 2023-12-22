// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leafList = (root) => {
  if (root === null) return [];

  let stack = [root];
  let arrayOfLeafs = [];

  while (stack.length > 0) {
    let current = stack.pop();

    if (current.right === null && current.left === null) {
      arrayOfLeafs.push(current.val);
    }

    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }

  return arrayOfLeafs;
};

module.exports = {
  leafList,
};

/*
  Use DFS
  Create stack that pops the values
  
  if left and rihgt don't exist, push it in an array for leafnodes
  
  */
