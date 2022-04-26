/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if(nums.lenght === 0) return 0
	if (nums.length === 1) return nums[0];
	const arr = new Array(nums.length).fill(0);
	for (let i = 0; i < nums.length; i++) {
		arr[i + 1] = arr[i] + nums[i];
	}
	let maxNum = -Infinity; 
	let minNum = 0;
	for (let i = 1; i < arr.length; i++) {
		maxNum = Math.max(maxNum, arr[i] - minNum);
		minNum = Math.min(minNum, arr[i]);
	}
	return maxNum;
};
// @lc code=end
