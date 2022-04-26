/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
	const cnt = [];
	for (let i = 0; i < nums.length; i++) {
		if (cnt[nums[i]]) {
			cnt[nums[i]] += 1;
		} else {
			cnt[nums[i]] = 1;
		}
	}
};
// @lc code=end
