/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let head = 0,
		tail = nums.length - 1;

	// 对比较长的区间用 2 分法，区间变小之后直接遍历，这种编码方式可以减少犯错率
	while (tail - head > 3) {
		let mid = (head + tail) >> 1;
		if (nums[mid] >= target) tail = mid;
		else head = mid + 1;
	}

	for (let i = head; i <= tail; i++) {
		if (nums[i] >= target) return i;
	}
	return nums.length;
};
// @lc code=end
