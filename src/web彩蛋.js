// 将数据加入到二叉搜索树和栈中，然后求得二叉树前序遍历获得的数组与将元素出栈获得的数组进行对位相减，求得的结果绝对值后再进行累加
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const array = require('./data');
// console.log(`array`, array);
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
const stack = [];
for (let i = 0; i < array.length; i++) {
	stack.unshift(array[i]);
}

const treeNode = buildTree(0, array);

function buildTree(root, arr) {
	if (!arr[root]) return null;
	let left = root * 2 + 1,
		right = root * 2 + 2;
	const treeNode = new TreeNode(arr[root]);
	treeNode.left = buildTree(left, arr);
	treeNode.right = buildTree(right, arr);
	return treeNode;
}
function inOrder(treeNode) {
	const arr = [];
	inOrderTravel(treeNode, arr);
	return arr;
}

function inOrderTravel(node, arr) {
	if (node) {
		arr.push(node.val);
		inOrderTravel(node.left, arr);
		inOrderTravel(node.right, arr);
	}
}
const inOrderArr = inOrder(treeNode);

let sum = 0;
for (let i = 0; i < stack.length; i++) {
	sum += Math.abs(Math.abs(inOrderArr[i]) - Math.abs(stack[i]));
}

console.log(`sum`, sum);
// 3543707702
