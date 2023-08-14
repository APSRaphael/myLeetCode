/*
 * @Author: raphael
 * @Date: 2021-04-17 14:48:26
 * @LastEditTime: 2021-04-17 21:08:29
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
	const arr = [];
	deepLevel(root, 0, arr);
	for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

const deepLevel = (root, level, arr) => {
	if (!root) return null;
	if (level === arr.length) arr.push(new Array());
	arr[level].push(root.val);
	deepLevel(root.left, level + 1, arr);
	deepLevel(root.right, level + 1, arr);
};
// @lc code=end
