/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-26 15:48:32
 * @LastEditTime: 2021-04-26 16:05:09
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:  
 */
/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const map = new Map(),
		arr = [...new Set(nums)];
	nums.map((num) => {
		map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
	});
	return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};
// @lc code=end
