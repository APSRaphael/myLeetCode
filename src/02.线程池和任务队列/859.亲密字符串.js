/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-24 22:33:44
 * @LastEditTime: 2021-04-22 16:30:04
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:  
 */
/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function (a, b) {
	if (a.length !== b.length) return false;
	if (a === b) {
		return a.length > new Set(b).size;
	}
	let c = (d = '');
	for (i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			c = a[i] + c;
			d += b[i];
		}
	}
	return c.length === 2 && c === d;
};
// @lc code=end
