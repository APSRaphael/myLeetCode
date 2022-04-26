/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
	const stack = [];
	let pathList = path.split('/');
	for (let i = 0; i < pathList.length; i++) {
		const p = pathList[i];
		if (p === '..') {
			stack.pop();
		} else if (p && p != '.') {
			stack.push(p);
		}
	}
	return '/' + stack.join('/');
};
// @lc code=end

simplifyPath('../.././home/kai/test.js')
