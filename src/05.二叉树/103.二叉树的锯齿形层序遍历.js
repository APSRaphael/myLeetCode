/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-17 14:48:32
 * @LastEditTime: 2021-04-17 20:57:01
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:  
 */
/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
	const arr = [];
	deepLevel(root, 0, arr);
	// arr.forEach((item, index) => {
	// 	if (index % 2 !== 0) {
	// 		for (let i = 0, j = item.length - 1; i < j; i++, j--) {
	// 			[item[i], item[j]] = [item[j], item[i]];
	// 		}
	// 	}
	// });
	return arr;
};

const deepLevel = (root, level, arr) => {
	if (!root) return null;
	if (level === arr.length) arr.push(new Array());
	if (level % 2 === 0) {
		arr[level].push(root.val);
	} else {
		arr[level].unshift(root.val);
	}
	deepLevel(root.left, level + 1, arr);
	deepLevel(root.right, level + 1, arr);
};
// @lc code=end
