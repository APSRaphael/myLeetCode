/*
 * @Author: raphael
 * @Date: 2021-04-08 00:43:08
 * @LastEditTime: 2021-08-30 17:23:38
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var invertTree = function (root) {
// 	if (!root) return null;
// 	[root.left, root.right] = [root.right, root.left];
// 	invertTree(root.left);
// 	invertTree(root.right);
// 	return root;
// };

var invertTree = function (root) {
	if (!root) return null;

	[root.left, root.right] = [invertTree(root.right), 	invertTree(root.left)];

	return root;
};
// @lc code=end
