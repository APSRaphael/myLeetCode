/*
 * @Author: raphael
 * @Date: 2021-04-16 00:33:17
 * @LastEditTime: 2021-04-17 14:26:50
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
	const arr = [];
	if (!root) return arr;
	inorderTraversalNode(root, arr);
	return arr;
};

var inorderTraversalNode = (node, arr) => {
	if (!node) return null;
	inorderTraversalNode(node.left, arr);
	arr.push(node.val);
	inorderTraversalNode(node.right, arr);
};
// @lc code=end
