/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-26 14:49:01
 * @LastEditTime: 2021-04-26 15:00:02
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor(root.left, p, q);
	} else if (p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor(root.right, p, q);
	} else {
		return root;
	}
};
// var lowestCommonAncestor = function (root, p, q) {
// 	let ancestor = root;
// 	while (true) {
// 		if (p.val < ancestor.val && q.val < ancestor.val) {
// 			return lowestCommonAncestor(ancestor.left, p, q);
// 		} else if (p.val > ancestor.val && q.val > ancestor.val) {
// 			return lowestCommonAncestor(ancestor.right, p, q);
// 		} else {
// 			break;
// 		}
// 	}
// 	return ancestor;
// };
// @lc code=end
