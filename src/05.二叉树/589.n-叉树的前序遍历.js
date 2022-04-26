/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-08 00:38:14
 * @LastEditTime: 2021-04-17 14:36:11
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
	const arr = [];
	order(root, arr);
	return arr;
};

var order = (root, arr) => {
	if (!root) return null;
	arr.push(root.val);
	for (const node of root.children) {
		order(node,arr)	
	}
};
// @lc code=end
