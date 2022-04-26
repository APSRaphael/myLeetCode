/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	// for (let i = 0; i < nums.length; i++) {
	// 	const num = nums[i];
	// 	if (num === nums[i + 1]) {
	// 		nums.splice(i + 1, 1);
	// 		i--;
	// 	}
	// }

	// 双指针
	const len = nums.length;
	let slow = 0;

	for (let fast = 0; fast < len; fast++) {
		if (nums[slow] !== nums[fast]) {
			slow++;
			nums[slow] = nums[fast];
		}
	}
	return slow + 1;
};
// @lc code=end
