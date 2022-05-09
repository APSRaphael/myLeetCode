/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
	if (nums[0] === target || nums[nums.length - 1] === target) return true;
	let l = 0,
		r = nums.length - 1,
		mid;
	// 当区间两端都不等于 target，把两端分别往之间移动，确保最前面的大于最后面的，而不是相同的值
	while (l < nums.length && nums[0] === nums[l]) l++;
	while (r >= 0 && nums[0] === nums[r]) r--;
	const head = l,
		tail = r;
	while (l <= r) {
		mid = (l + r) >> 1;
		if (nums[mid] === target) return true;
        // 先区分是在左边还是右边，因为只有在对应的区域才是有序的，才能使用二分查找。整体区间无序。
		if (nums[mid] <= nums[tail]) {
			if (target <= nums[tail] && target > nums[mid]) {
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		} else {
			if (target >= nums[head] && target < nums[mid]) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		}
	}

	return false;
};
// @lc code=end
