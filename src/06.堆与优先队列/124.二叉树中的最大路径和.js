/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-26 15:01:39
 * @LastEditTime: 2021-04-27 16:01:02
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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

var maxPathSum = function (root) {
	let maxSum = Number.MIN_SAFE_INTEGER;
	const dfs = (root) => {
		if (!root) return 0;
		const left = dfs(root.left);
		const right = dfs(root.right);
		const innerMaxSum = left + root.val + right;
		maxSum = Math.max(maxSum, innerMaxSum);
		const outputMaxSum = root.val + Math.max(left, right);
		return outputMaxSum < 0 ? 0 : outputMaxSum;
	};
	dfs(root);
	return maxSum;
};
// @lc code=end
