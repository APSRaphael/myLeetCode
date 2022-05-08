/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
	let l = 0,
		r = 0;
	for (let i = 0; i < weights.length; i++) {
		const weight = weights[i];
		l = Math.max(l, weight);
		r = r + weight;
	}
};
// @lc code=end
