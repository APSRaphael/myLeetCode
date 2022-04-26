/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-17 20:58:39
 * @LastEditTime: 2021-04-17 21:15:33
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
	return getHeight(root) >= 0;
};

var getHeight = function (root) {
	if (!root) return 0;
	const l = getHeight(root.left);
	const r = getHeight(root.right);
	if (l < 0 || r < 0) return -1;
	if (Math.abs(l - r) > 1) return -1;
	return Math.max(l, r) + 1;
};
// @lc code=end
