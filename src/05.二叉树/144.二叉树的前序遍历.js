/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-15 00:36:13
 * @LastEditTime: 2022-04-19 10:39:19
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function (root) {
// 	const arr = [];
// 	preorderTraversalNode(root, arr);
// 	return arr;
// };

// var preorderTraversalNode = function (root, arr) {
// 	if (root) {
// 		arr.push(root.val);
// 		preorderTraversalNode(root.left, arr);
// 		preorderTraversalNode(root.right, arr);
// 	}
// };
// [3,1,2]
var preorderTraversal = function (root) {
	const res = [];
	if (!root) return res;
	const stack = [];
	stack.push(root);
	while (stack.length) {
		let node = stack.pop();
		// 后进先出
		res.push(node.val);
		if (node.right) stack.push(node.right);
		if (node.left) stack.push(node.left);
	}
	return res;
};
// @lc code=end
