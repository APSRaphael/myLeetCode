/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    const arr = []
    deepLevel(root, 0, arr)
    return arr
};

var deepLevel = (root, level, arr) => {
    if (!root) return null
    if (level === arr.length) arr.push(new Array())
    arr[level].push(root.val)
    deepLevel(root.left, level + 1, arr)
    deepLevel(root.right, level + 1, arr)
}
