/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

var findLeafNodes = (root) => {
  let stack = [root];
  let result = [];

  while (stack.length > 0) {
    let current = stack.pop();
    if (current.left === null && current.right === null) {
      result.push(current.val);
    }
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
};

var leafSimilar = function (root1, root2) {
  let arr1 = findLeafNodes(root1);
  let arr2 = findLeafNodes(root2);

  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] !== arr2[i]) return false;
    i++;
    j++;
  }
  return true;
};

/*
1) Use DFS to find leaf nodes (stack, pop, left right)
2) store leaf nodes from root1 and root2 in two sepearte arrays
3) loop through newly created arrays
*/
