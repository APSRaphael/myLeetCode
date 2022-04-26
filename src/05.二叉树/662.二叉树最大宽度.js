/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-18 18:01:12
 * @LastEditTime: 2021-04-19 17:17:38
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
	if (!root) return 0;
	let max = 1n,
		que = [[0n, root]];
	while (que.length) {
		const width = que[que.length - 1][0] - que[0][0] + 1n;
		if (width > max) max = width;
		const temp = [];
		// for (const [i, q] of que) {
		// 	q.left && temp.push([i * 2n, q.left]);
		// 	q.right && temp.push([i * 2n + 1n, q.right]);
		// }
		for (let i = 0; i < que.length; i++) {
			const [j, q] = que[i];
			q.left && temp.push([j * 2n, q.left]);
			q.right && temp.push([j * 2n + 1n, q.right]);
		}
		que = temp;
	}
	return Number(max);
};

// @lc code=end
