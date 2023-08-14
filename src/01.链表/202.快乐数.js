/*
 * @Author: raphael
 * @Date: 2021-03-10 14:40:11
 * @LastEditTime: 2021-03-14 17:39:51
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let pre = n,
		cur = n;
	do {
		pre = getNext(pre);
		cur = getNext(getNext(cur));
	} while (pre !== cur && cur !== 1);
	return cur === 1;
};

var getNext = function (n) {
	let t = 0;
	while (n) {
		t += Math.pow(n % 10, 2);
		n = Math.floor(n / 10);
	}
	return t;
};

// @lc code=end
