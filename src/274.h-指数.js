/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	citations.sort((a, b) => a - b);
	let h = 1,
		n = citations.length;
	while (h <= n && citations[n - h] >= h) h++;
	return h - 1;
};
// @lc code=end
