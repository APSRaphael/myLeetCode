/*
 * @Author: raphael
 * @Date: 2021-03-31 13:38:25
 * @LastEditTime: 2021-03-31 20:29:32
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {sing} s
 * @return {number}
 */
var calculate = function (s) {
	 s = s.trim();
	const stack = new Array();
	let preSign = '+';
	let num = 0;
	for (let i = 0; i < s.length; i++) {
		if (!isNaN(s[i]) && s[i] !== ' ') {
			num = num * 10 + Number(s[i]);
		}
		if (isNaN(s[i]) || i === s.length - 1) {
			switch (preSign) {
				case '+':
					stack.push(num);
					break;
				case '-':
					stack.push(-num);
					break;
				case '*':
					stack.push(stack.pop() * num);
					break;
				default:
					stack.push((stack.pop() / num) | 0);
					break;
			}
			preSign = s[i];
			num = 0;
		}
	}
    return stack.reduce((a, b) => a + b);
};
// @lc code=end
