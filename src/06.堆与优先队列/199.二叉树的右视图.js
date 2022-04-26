/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-26 18:27:27
 * @LastEditTime: 2021-04-28 15:10:50
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
	if (!root) return [];
	const map = new Map();
	const queue = [[root, 0]];
	while (queue.length) {
		const [{ left, right, val }, deep] = queue.shift();
		map.set(deep, val);
		left && queue.push([left, deep + 1]);
		right && queue.push([right, deep + 1]);
	}
	return [...map.values()];
};
// @lc code=end
