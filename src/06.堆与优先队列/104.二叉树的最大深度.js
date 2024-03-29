/*
 * @Author: raphael
 * @Date: 2021-04-26 10:36:46
 * @LastEditTime: 2021-04-26 10:37:20
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	if (!root) return 0;
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// @lc code=end
