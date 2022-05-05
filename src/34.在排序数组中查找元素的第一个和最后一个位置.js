/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	const ret = [-1, -1];
	ret[0] = binarySearch(nums, target);
	if (ret[0] === nums.length || nums[ret[0]] !== target) {
		return [-1, -1];
	}
	// 找到+1值的位置，再减去 1 就是当前值的最后一个的位置
	ret[1] = binarySearch(nums, target + 1);

	return [ret[0], ret[1] - 1];
};

var binarySearch = function (nums, x) {
	let head = 0,
		tail = nums.length - 1,
		mid;
	while (tail - head > 3) {
		mid = (head + tail) >> 1;
		if (nums[mid] >= x) tail = mid;
		else head = mid + 1;
	}
	for (let i = head; i <= tail; i++) {
		if (nums[i] >= x) return i;
	}
	return nums.length;
};
// @lc code=end
