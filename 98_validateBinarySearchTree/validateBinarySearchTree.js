/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
    let queue = [[root, -Infinity, Infinity]];

    while (queue.length > 0) {
        const [curr, left, right] = queue.shift() as [TreeNode, number, number]

        if (!(left < curr.val && curr.val < right)) return false;

        if (curr.left) {
            queue.push([curr.left, left, curr.val])
        }

        if (curr.right) {
            queue.push([curr.right, curr.val, right])
        }
    }

    return true;
};