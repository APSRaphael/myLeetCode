/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	// if (n === 0 || n === 1) {
	// 	return n;
	// } else {
	// 	return fib(n - 1) + fib(n - 2);
	// }

	const cache = [];
	for (let i = 0; i <= n; i++) {
		if (i == 0 || i == 1) {
			cache[i] = i;
		} else {
			cache[i] = cache[i - 1] + cache[i - 2];
		}
	}
	return cache[n];
};
// @lc code=end
