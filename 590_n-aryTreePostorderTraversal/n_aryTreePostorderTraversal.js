/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];
  let stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();
    for (let child of current.children) {
      stack.push(child);
    }
    res.push(current.val);
  }
  return res.reverse();
};

/*
Use a stack, pop off their children.
*/
