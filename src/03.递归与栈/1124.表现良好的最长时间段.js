/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-01 17:25:50
 * @LastEditTime: 2021-04-11 17:52:56
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1124 lang=javascript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
	let preSum = new Array(hours.length + 1).fill(0);
	for (let i = 0; i < hours.length; i++) {
		if (hours[i] > 8) preSum[i + 1] = preSum[i] + 1;
		else {
			preSum[i + 1] = preSum[i] - 1;
		}
	}
	let stack = [];
	stack.push(0);
	for (let i = 0; i < preSum.length; i++) {
		if (preSum[i] < preSum[stack[stack.length - 1]]) stack.push(i);
	}
	let max = 0;
	for (let j = preSum.length - 1; j > max; j--) {
		while (stack.length && preSum[stack[stack.length - 1]] < preSum[j]) {
			max = Math.max(max, j - stack.pop());
		}
	}
	return max;
};
// @lc code=end
