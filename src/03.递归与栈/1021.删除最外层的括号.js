/*
 * @Author: raphael
 * @Date: 2021-03-30 16:49:52
 * @LastEditTime: 2021-04-12 10:15:59
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
// var removeOuterParentheses = function (S) {
// 	const stack = [];
// 	let t = '';
// 	let count = 0;
// 	for (let i = 0; i < S.length; i++) {
// 		const s = S[i];
// 		t += s;
// 		if (s === '(') {
// 			count++;
// 		} else if (s === ')') {
// 			count--;
// 		}
// 		if (!count) {
// 			stack.push(t);
// 			t = '';
// 		}
// 	}
// 	for (let i = 0; i < stack.length; i++) {
// 		const s = stack[i];
// 		t += s.slice(1, s.length - 1);
// 	}
// 	return t;
// };

var removeOuterParentheses = function (S) {
	let t = '';
	let count = 0;
	for (const s of S) {
		if (s === '(' && count++ > 0) t += s;
		if (s === ')' && count-- > 1) t += s;
	}
	return t;
};
// @lc code=end
