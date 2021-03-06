/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	let list = [];
	backTrack(list, [], nums);
	return list;
};

function backTrack(list, temp, nums) {
	if (temp.length === nums.length) {
		return list.push([...temp]);
	}
	for (let i = 0; i < nums.length; i++) {
		if (temp.includes(nums[i])) continue;
		temp.push(nums[i]);
		backTrack(list, temp, nums);
		temp.pop();
	}
}
// @lc code=end
