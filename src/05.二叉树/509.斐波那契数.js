/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-15 22:54:57
 * @LastEditTime: 2021-04-15 22:56:53
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:  
 */
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
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fib(n-1) + fib(n - 2);
};
// @lc code=end
