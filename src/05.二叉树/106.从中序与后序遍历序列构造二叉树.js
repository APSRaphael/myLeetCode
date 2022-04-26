/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-09 01:19:53
 * @LastEditTime: 2021-04-29 18:22:31
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
var buildTree = function (inorder, postorder) {
	console.log(`inorder`, inorder);
	console.log(`postorder`, postorder);
	if (!inorder.length) return null;
	let pos = 0;
	while (inorder[pos] !== postorder[postorder.length - 1]) ++pos;
	const lin = [],
		lpos = [],
		rin = [],
		rpos = [];
	for (let i = 0; i < pos; i++) {
		lin.push(inorder[i]);
		lpos.push(postorder[i]);
	}
	for (let i = pos; i < postorder.length - 1; i++) {
		rin.push(inorder[i + 1]);
		rpos.push(postorder[i]);
	}

	const treeNode = new TreeNode(postorder[postorder.length - 1]);
	treeNode.left = buildTree(lin, lpos);
	treeNode.right = buildTree(rin, rpos);
	return treeNode;
};
// @lc code=end

const inOrderStr = `103857 579220 591899 634827 787863 827654 1046307 1158931 1279694 1382996 1456881 1591804 1612718 1654115 1767859 1858301 2267835 2309657 2317931 2343977 2424201 2437415 2532162 2534345 2678011 2764278 2770175 2826584 2833362 2871682 2881637 3014150 3126711 3393602 3482580 3523647 3733657 3834018 3854965 3866869 3920601 4208987 4225518 4297111 4309938 4407246 4435967 4496929 4522001 4547481 4746509 4986504 5066986 5075516 5233892 5255939 5332515 5474284 5541875 5655006 5702782 5811063 5949618 6028856 6040500 6196531 6213872 6280298 6350155 6418966 6477928 6532974 6626558 6983104 7086416 7120444 7246794 7295593 7299049 7530932 7653296 7691842 7732415 7748116 8208637 8220339 8318376 8409970 8414634 8579250 8989734 9076914 9193845 9232618 9253016 9342589 9463496 9608664 9772869 9861978`;
const postOrderStr = `103857 579220 634827 591899 787863 1046307 1591804 1456881 1382996 1279694 1158931 827654 1654115 1858301 2309657 2343977 2317931 2267835 1767859 2534345 2532162 2437415 2424201 1612718 2770175 2833362 3014150 3393602 3126711 3482580 2881637 2871682 2826584 3733657 3523647 3834018 2764278 3920601 4208987 4309938 4297111 4225518 3866869 4496929 4522001 4435967 5066986 4986504 4746509 5075516 4547481 5332515 5474284 5255939 5655006 5811063 5949618 5702782 6028856 5541875 5233892 6196531 6213872 6350155 6477928 6418966 6626558 6532974 6983104 6280298 7246794 7530932 7653296 7299049 7295593 7732415 7748116 8208637 7691842 7120444 7086416 6040500 4407246 8409970 8414634 8318376 8989734 9076914 9463496 9342589 9608664 9253016 9232618 9193845 9772869 9861978 8579250 8220339 3854965 2678011`;

const inOrderArr = inOrderStr.split(' ');
const postOrderArr = postOrderStr.split(' ');

const tree = buildTree(inOrderArr, postOrderArr);
const inOrderList = (treeNode) => {
	const arr = [];
	inOrder(treeNode, arr);
	return arr;
};

const inOrder = (node, arr) => {
	if (node) {
		arr.push(node.val);
		inOrder(node.left, arr);
		inOrder(node.right, arr);
	}
};

const arr = inOrderList(tree);
console.log(`arr`, arr);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i] * i;
}
console.log(`sum`, sum);
