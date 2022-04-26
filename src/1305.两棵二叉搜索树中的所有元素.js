/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
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

var getAllElements = function (root1, root2) {
	const arr1 = inorderTraversal(root1);
	const arr2 = inorderTraversal(root2);
	const tempArr = [];
	let 
		p1 = 0,
		p2 = 0;

	const length1 = arr1.length;
	const length2 = arr2.length;

	while (p1 < length1 || p2 < length2) {
		if (
			p2 >= length2 ||
			(p1 < length1 && arr1[p1] <= arr2[p2])
		) {
			tempArr.push(arr1[p1++])
		} else {
			tempArr.push(arr2[p2++])
		}
	}
	return tempArr;
};
// @lc code=end
