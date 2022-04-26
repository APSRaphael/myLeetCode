/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
	if (nums.length < 2) {
		return nums;
	}
	return quickSort(nums, 0, nums.length - 1);
};

function quickSort(arr, l, r) {
	if (l >= r) return;
	let x = l,
		y = r,
		base = arr[l];

	while (x < y) {
		while (x < y && arr[y] >= base) y--;
		if (x < y) arr[x++] = arr[y];
		while (x < y && arr[x] < base) x++;
		if (x < y) arr[y--] = arr[x];
	}
	arr[x] = base;
	quickSort(arr, l, x - 1);
	quickSort(arr, x + 1, r);
	return arr;
}

// @lc code=end
