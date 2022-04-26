/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-30 16:13:35
 * @LastEditTime: 2021-03-30 17:10:18
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:  
 */
/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(S) {
	let count = 0;
	let t = '';
	for (let i = 0; i < S.length; i++) {
		const s = S[i];
		if (s == '(' || s !== ')') {
			count += s === '(';
			t += s;
		} else {
			if (count === 0) continue;
			t += ')';
			count--;
		}
	}
	let o = '';
    count = 0
	for (let i = t.length - 1; i >= 0; i--) {
		const s = t[i];
		if (s == ')' || s !== '(') {
			count += s === ')';
			o = s + o;
		} else {
			if (count === 0) continue;
			o = '(' + o;
			count--;
		}
	}
	return o;
};
// @lc code=end

