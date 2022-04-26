/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-26 18:34:52
 * @LastEditTime: 2021-08-30 17:14:48
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function (p, q) {
// 	if (!p && !q) return true;
// 	if (!p) return false;
// 	if (!q) return false;
// 	if (
// 		p.val === q.val &&
// 		isSameTree(p.left, q.left) &&
// 		isSameTree(p.right, q.right)
// 	) {
// 		return true;
// 	}
// 	return false;
// };

var isSameTree = function (p, q) {
	if (!p && !q) return true;
	if (!p || !q) return false;
	if (p.val !== q.val) return false;
	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// @lc code=end
