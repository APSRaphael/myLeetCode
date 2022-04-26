/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-08 23:42:10
 * @LastEditTime: 2021-04-13 23:41:28
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
	if (!root) return false;
	if (!root.left && !root.right) return root.val === targetSum;
	targetSum -= root.val;
	return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
// @lc code=end
