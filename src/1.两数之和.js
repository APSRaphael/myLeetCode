/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
// 	const targetMap = new Map();

// 	for (let index = 0; index < nums.length; index++) {
// 		const num = nums[index];
// 		const key = target - num;

// 		if (targetMap.has(key)) {
// 			return [targetMap.get(key), index];
// 		}
// 		targetMap.set(num, index);
// 	}
// };

var twoSum = function (nums, target) {
	const ind = new Array(nums.length);
	for (let i = 0; i < ind.length; i++) ind[i] = i;
	// 对原数组的下标进行排序，然后利用下标去做二分算法
	ind.sort((a, b) => nums[a] - nums[b]);
	let ret = [];
	for (let i = 0; i < ind.length; i++) {
		let val = nums[ind[i]];
		let j = binarySearch(nums, ind, i + 1, target - val);
		// j 等于 -1 代表没有找到相应的值
		if (j === -1) continue;
		let a = ind[i]; // 获取到原数组的 index
		let b = ind[j];
		if (a > b) [a, b] = [b, a];
		ret[0] = a;
		ret[1] = b;
	}
	return ret;
};

var binarySearch = function (nums, ind, head, x) {
	let tail = ind.length - 1,
		mid;

	while (head <= tail) {
		mid = (head + tail) >> 1;
		if (nums[ind[mid]] === x) return mid;
		if (nums[ind[mid]] < x) head = mid + 1;
		else tail = mid - 1;
	}

	return -1;
};

// @lc code=end
