/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
	// 初始化两个前缀和数组，一个从左往右，一个从右往左
	const suml = new Array(nums.length + 1).fill(0);
	//由于都是正数，所以这个是一个有序的数组，可以使用二分查找
	const sumr = new Array(nums.length + 1).fill(0);
	for (let i = 0; i < nums.length; i++) {
		suml[i + 1] = suml[i] + nums[i];
	}
	for (let i = nums.length - 1; i >= 0; i--) {
		sumr[nums.length - i] = sumr[nums.length - i - 1] + nums[i];
	}
	let ans = -1;
	for (let i = 0; i < suml.length; i++) {
		let j = binarySearch(sumr, x - suml[i]);
		// 如果在从右往左的数组中不能找到剩余的值，就返回-1
		if (j == -1) continue;
		// 如果加起来大于原数组的长度，说明有重复
		if (i + j > nums.length) continue;
		if (ans === -1 || ans > i + j) ans = i + j;
	}
	return ans;
};

var binarySearch = function (nums, x) {
	let head = 0,
		tail = nums.length - 1,
		mid;

	while (head <= tail) {
		mid = (head + tail) >> 1;
		if (nums[mid] === x) return mid;
		if (nums[mid] > x) tail = mid - 1;
		else head = mid + 1;
	}
	return -1;
};
// @lc code=end
