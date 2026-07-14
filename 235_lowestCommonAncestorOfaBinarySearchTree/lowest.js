
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let curr = root;

    while (curr) {
        if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right
        } else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left;
        } else {
            return curr;
        }
    }
};
