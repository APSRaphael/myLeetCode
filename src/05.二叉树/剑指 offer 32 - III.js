/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	const arr = [];
	deepLevel(root, 0, arr);
	// arr.forEach((item, index) => {
	// 	if (index % 2 !== 0) {
	// 		for (let i = 0, j = item.length - 1; i < j; i++, j--) {
	// 			[item[i], item[j]] = [item[j], item[i]];
	// 		}
	// 	}
	// });
	return arr;
};

const deepLevel = (root, level, arr) => {
	if (!root) return null;
	if (level === arr.length) arr.push(new Array());
	if (level % 2 === 0) {
		arr[level].push(root.val);
	} else {
		arr[level].unshift(root.val);
	}
	deepLevel(root.left, level + 1, arr);
	deepLevel(root.right, level + 1, arr);
};
