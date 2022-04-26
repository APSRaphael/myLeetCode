/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const targetMap = new Map();

	for (let index = 0; index < nums.length; index++) {
		const num = nums[index];
		const key = target - num;

		if (targetMap.has(key)) {
			return [targetMap.get(key), index];
		}
		targetMap.set(num, index);
	}
};
// @lc code=end
