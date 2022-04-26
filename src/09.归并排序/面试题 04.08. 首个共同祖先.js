/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return null;
    if (root === p || root === q) return root;
    let rootLeft = lowestCommonAncestor(root.left, p, q);
    let rootRight = lowestCommonAncestor(root.right, p, q);
    // 同时存在，说明分别在 root 两边
    if (rootLeft && rootRight) return root;
    // 只有左边
    if (rootLeft) return rootLeft;
    return rootRight;
};
