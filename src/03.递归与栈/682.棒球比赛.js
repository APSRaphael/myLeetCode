/*
 * @Author: raphael
 * @Date: 2021-03-30 00:48:41
 * @LastEditTime: 2021-03-30 01:07:14
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
	const arr = [];
	for (let i = 0; i < ops.length; i++) {
		switch (ops[i]) {
			case '+':
				arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
				break;
			case 'D':
				arr.push(arr[arr.length - 1] * 2);
				break;
			case 'C':
				arr.pop();
				break;
			default:
				arr.push(Number(ops[i]));
				break;
		}
	}

	return arr.reduce((a, b) => a + b, 0);
};
// @lc code=end
