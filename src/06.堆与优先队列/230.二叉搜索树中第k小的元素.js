/*
 * @Author: raphael
 * @Date: 2021-04-26 18:06:24
 * @LastEditTime: 2021-04-28 15:08:32
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function (root, k) {
// 	const arr = [];
// 	inOrder(root, arr);
// 	return arr[k - 1];
// };

// var inOrder = function (root, arr) {
// 	if (root) {
// 		inOrder(root.left, arr);
// 		arr.push(root.val);
// 		inOrder(root.right, arr);
// 	}
// };

var kthSmallest = function (root, k) {
	let res = root.val;

	const inOrder = (root) => {
		if (root) {
			inOrder(root.left);
			if (--k === 0) {
				return (res = root.val);
			}
			inOrder(root.right);
		}
	};
	inOrder(root);
	return res;
};

var kthSmallest = function (root, k) {
	let stack = [];
	let node = root;
	while (node || stack.length) {
		while (node) {
			stack.push(node);
			node = node.left;
		}
		node = stack.pop()
		if(--k === 0) return node.val
		node = node.right
	}
	return null
};
// @lc code=end
