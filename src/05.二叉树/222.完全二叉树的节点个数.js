/*
 * @Author: raphael
 * @Date: 2021-04-14 09:43:05
 * @LastEditTime: 2021-04-14 09:43:41
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function (root) {
	if (!root) return 0;
	return countNodes(root.left) + countNodes(root.right) + 1;
};
// @lc code=end
