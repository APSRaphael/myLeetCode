/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	return threePartition(nums, 0, nums.length - 1, 1);
};

var threePartition = function (arr, l, r, mid) {
	if (l >= r) return arr;
	let x = -1,
		y = r + 1,
		i = l;
	while (i < y) {
		if (arr[i] === mid) {
			i++;
		} else if (arr[i] < mid) {
			x++;
			swap(arr, x, i);
			i++;
		} else if (arr[i] > mid) {
			y--;
			swap(arr, y, i);
		}
	}
	return arr;
};

var swap = function (arr, x, y) {
	[arr[x], arr[y]] = [arr[y], arr[x]];
};

// @lc code=end
