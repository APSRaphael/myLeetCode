/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	let head = 0,
		tail = x;
	tail += 1;

	// 循环 100 次，其实 head跟 mid 的差别非常小，每循环一次，都是除以 2，相当于是  2 的 100 次方 分之 1
	for (let i = 0; i < 100; i++) {
		let mid = head + (tail - head) / 2;
		if (mid * mid <= x) head = mid;
		else tail = mid;
	}

	return Math.floor(head);
};
// @lc code=end
