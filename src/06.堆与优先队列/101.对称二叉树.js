/*
 * @Author: raphael
 * @Date: 2021-04-26 18:38:07
 * @LastEditTime: 2021-04-28 15:31:35
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// var isSymmetric = function (root) {
// 	if (!root) return true;
// 	const queue = [[root.left, root.right]];
// 	while (queue.length) {
// 		const [leftNode, rightNode] = queue.shift();
// 		if (!leftNode && !rightNode) continue;
// 		if (!leftNode || !rightNode) return false;
// 		if (leftNode.val === rightNode.val) {
// 			queue.push([leftNode.left, rightNode.right]);
// 			queue.push([leftNode.right, rightNode.left]);
// 		} else {
// 			return false;
// 		}
// 	}
// 	return true;
// };

var isSymmetric = function (root) {
	if (!root) return true;
	return isMirror(root.left, root.right);
};

var isMirror = function (leftNode, rightNode) {
	if (!leftNode && !rightNode) return true;
	if (!leftNode) return false;
	if (!rightNode) return false;
	if (
		leftNode.val === rightNode.val &&
		isMirror(leftNode.left, rightNode.right) &&
		isMirror(leftNode.right, rightNode.left)
	)
		return true;
	return false;
};
// @lc code=end
