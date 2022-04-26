/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
// 	if (!height || height.length <= 1) return 0;

// 	let left = 0;
// 	let right = height.length;
// 	let max = 0;

// 	while (left < right) {
// 		const area = Math.abs(right - left) * Math.min(height[right], height[left]);

// 		if (area > max) max = area;

// 		if (height[left] < height[right]) {
// 			left++;
// 		} else {
// 			right--;
// 		}
// 	}
// 	return max;
// };

var maxArea = function (height) {
	let left = 0,
		right = height.length - 1,
		max = 0;

	while (left < right) {
		const area = Math.abs(right - left) * Math.min(height[right], height[left]);
		if (max < area) max = area;
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}

	return max
};
// @lc code=end
