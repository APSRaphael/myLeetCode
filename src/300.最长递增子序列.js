/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 如果后面的比前面小，就用后面的替换前面的，如果后面的比前面大，就在数组中加一位
var lengthOfLIS = function (nums) {
	let head = 1,
		tail = nums.length;
	if (tail === 0) return 0;
	let array = [];
	array[head] = nums[0];
	for (let i = 0; i < tail; ++i) {
        console.log('nums[i] :>> ', nums[i]); // hk-log
        console.log('array :>> ', array); // hk-log
		if (nums[i] > array[head]) {
			array[++head] = nums[i];
		} else {
			let l = 1,
				r = head,
				flag = 0
			while (l <= r) {
				let mid = (l + r) >> 1;
				if (array[mid] < nums[i]) {
					flag = mid;
					l = mid + 1;
				} else {
					r = mid - 1;
				}
			} 
			array[flag + 1] = nums[i];
			console.log('array :>> ', array); // hk-log
		}
	}

	return head;
};
// @lc code=end
