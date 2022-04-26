/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
// 	// 排序+ 双指针
// 	if (nums.length < 3) return [];
// 	let list = [];
// 	nums.sort((a, b) => a - b); // js 自带的排序是插入跟快排结合，复杂度是 nlgn
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] === nums[i - 1]) continue;
// 		let left = i + 1;
// 		let right = nums.length - 1;
// 		while (left < right) {
// 			if (nums[left] + nums[right] + nums[i] === 0) {
// 				list.push([nums[left], nums[right], [nums[i]]]);
// 				while (nums[left] === nums[left + 1]) {
// 					left++;
// 				}
// 				left++;
// 				while (nums[right] === nums[right - 1]) {
// 					right--;
// 				}
// 				right--;
// 			} else if (nums[left] + nums[right] + nums[i] > 0) {
// 				// 数组是从小到大排好序的
// 				right--;
// 			} else {
// 				left++;
// 			}
// 		}
// 	}
// 	return list;
// };

var threeSum = function (nums) {
	if (nums.length < 3) return [];
	const ret = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue;
		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			if (nums[left] + nums[right] + nums[i] === 0) {
				ret.push([nums[left], nums[right], nums[i]]);
				while (nums[left] === nums[left + 1]) {
					left++;
				}
				left++;
				while (nums[right] === nums[right - 1]) {
					right--;
				}
				right--;
			} else if (nums[left] + nums[right] + nums[i] > 0) {
				right--;
			} else {
				left++;
			}
		}
	}

	return ret;
};

var threeSum = function (nums) {
	if (nums.length < 3) return [];
	const ret = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue;
		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			if (nums[i] + nums[left] + nums[right] === 0) {
				ret.push([nums[i], nums[left], nums[right]]);
				while (nums[right] === nums[right - 1]) {
					right--;
				}
				right--;
				while (nums[left] === nums[left + 1]) {
					left++;
				}
				left++;
			} else if (nums[i] + nums[left] + nums[right] > 0) {
				right--;
			} else {
				left++;
			}
		}
	}
};
// @lc code=end
