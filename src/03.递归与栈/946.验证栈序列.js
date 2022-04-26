/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
	const stack = [];
	let cur = 0;
	for (const item of pushed) {
		stack.push(item);
		while (stack[stack.length - 1] === popped[cur] && stack.length) {
			stack.pop();
			cur++;
		}
	}
	return !stack.length;
};
// @lc code=end
