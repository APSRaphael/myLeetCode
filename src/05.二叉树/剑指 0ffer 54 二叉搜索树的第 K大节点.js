/*
 * @Author: raphael
 * @Date: 2021-04-15 23:20:30
 * @LastEditTime: 2021-04-17 15:57:34
 * @LastEditors: raphael
 * @Description:
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * dfs 深度优先搜索
 */


// var kthLargest = function (root, k) {
//     let targetSum = 0
//     if (!root) return false
//     function dfs(root) {
//         if (!root) return
//         dfs(root.right)
//         if (!--k) targetSum = root.val
//         dfs(root.left)
//     }
//     dfs(root)
//     return targetSum
// };
var kthLargest = (root, k) => {
	if (!root) return false;
	let targetSum = 0;
	function dfs(root) {
		if (!root) return;
		dfs(root.right);
		if (!--k) targetSum = root.val;
		dfs(root.left);
	}
	dfs(root);
	return targetSum;
};
// var getCount = (root) => {
// 	if (!root) return 0;
// 	return getCount(root.left) + getCount(root.right) + 1;
// };
// var kthLargest = function (root, k) {
// 	const rNum = getCount(root.right);
// 	if (k <= rNum) return kthLargest(root.right, k);
// 	if (k === rNum + 1) return root.val;
// 	return kthLargest(root.left, k - rNum - 1);
// };
