/*
 * @Author: raphael
 * @Date: 2021-03-30 01:08:46
 * @LastEditTime: 2021-04-01 17:25:27
 * @LastEditors: raphael
 * @Description:  1
 */
/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
	return process(S) === process(T);
};

var process = function (str) {
	const stack = [];
	for (const s of str) {
		if (s === '#') {
			stack.pop();
		} else {
			stack.push(s);
		}
	}
	return stack.join('');
};
// @lc code=end
