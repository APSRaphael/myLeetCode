/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-09 00:00:20
 * @LastEditTime: 2021-05-12 16:10:17
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

const { inOrderStr } = require('./inOrder.js');
const { preOrderStr } = require('./preOrder.js');

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
var buildTree = function (preorder, inorder) {
	if (!preorder.length) return null;
	let pos = 0;
	while (inorder[pos] !== preorder[0]) ++pos;
	const lpre = [],
		lin = [],
		rpre = [],
		rin = [];
	for (let i = 0; i < pos; i++) {
		lpre.push(preorder[i + 1]);
		lin.push(inorder[i]);
	}
	for (let i = pos + 1; i < preorder.length; i++) {
		rpre.push(preorder[i]);
		rin.push(inorder[i]);
	}
	const treeNode = new TreeNode(preorder[0]);
	treeNode.left = buildTree(lpre, lin);
	treeNode.right = buildTree(rpre, rin);
	return treeNode;
};
// @lc code=end

var postorder = function (treeNode, arr) {
	if (treeNode) {
		postorder(treeNode.left, arr);
		postorder(treeNode.right, arr);
		arr.push(treeNode.val);
	}
};

const preOrder = preOrderStr.split(' ');
const inOrder = inOrderStr.split(' ');

const tree = buildTree(preOrder, inOrder);

const arr = [];
postorder(tree, arr);

let num = 0;
arr.forEach((item, index) => {
	num += item * (index + 1);
});
console.log(`num`, num);
