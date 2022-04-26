/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-30 22:27:53
 * @LastEditTime: 2021-04-15 00:38:27
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:  
 */
/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// var postorderTraversal = function (root) {
// 	if (!root) return res;
// 	const res = new Array();
// 	return postorderTraversalNode(root, res);
// };

// var postorderTraversalNode = function (node, res) {
// 	if (node) {
// 		postorderTraversalNode(node.left, res);
// 		postorderTraversalNode(node.right, res);
// 		res.push(node.val);
// 	}
// 	return res;
// };

var postorderTraversal = function (root) {
	const res = [];
	const stack = [];
	if (!root) return res;
	stack.push(root);
	while (stack.length) {
		let node = stack.pop();
		res.unshift(node.val);
		if (node.left) stack.push(node.left);
		if (node.right) stack.push(node.right);
	}
	return res;
};
// @lc code=end
