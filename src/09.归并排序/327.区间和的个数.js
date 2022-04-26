/*
 * @lc app=leetcode.cn id=327 lang=javascript
 *
 * [327] 区间和的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// var countRangeSum = function (nums, lower, upper) {
// 	// 把原题转换成前缀和数组的两项相减操作
// 	const sums = new Array(nums.length).fill(0);
// 	for (let i = 0; i < nums.length; i++) {
// 		sums[i + 1] = sums[i] + nums[i];
// 	}
// 	return mergeSort(sums, 0, sums.length - 1, lower, upper);
// };

// 	return ans;
// };
// var mergeSort = function (sums, l, r, lower, upper) {
// 	// 只有一个的情况下无法实现两项相减的操作
// 	if (l >= r) return 0;
// 	const mid = (l + r) >> 1;
// 	let ans = 0;
// 	ans += mergeSort(sums, l, mid, lower, upper);
// 	ans += mergeSort(sums, mid + 1, r, lower, upper);
// 	ans += countTwoPart(sums, l, mid, mid + 1, r, lower, upper);
// 	let k = l,
// 		p1 = l,
// 		p2 = mid + 1;
// 	const temp = [];
// 	while (p1 <= mid || p2 <= r) {
// 		if (p2 > r || (p1 <= mid && sums[p1] <= sums[p2])) {
// 			temp[k++] = sums[p1++];
// 		} else {
// 			temp[k++] = sums[p2++];
// 		}
// 	}
// 	for (let i = l; i <= r; i++) {
// 		sums[i] = temp[i];
// 	}

// 	return ans;
// };

// var countTwoPart = function (sums, l1, r1, l2, r2, lower, upper) {
// 	let ans = 0,
// 		k1 = l1,
// 		k2 = l1;
// 	for (let j = l2; j <= r2; j++) {
// 		// 利用数组的单调性，j增加的时候，k1 跟k2 不需要从头开始，继续往后即可
// 		let a = sums[j] - upper;
// 		let b = sums[j] - lower;
// 		while (k1 <= r1 && sums[k1] < a) k1++;
// 		while (k2 <= r1 && sums[k2] <= b) k2++;
// 		ans += k2 - k1;
// 	}
var countRangeSum = function (nums, lower, upper) {
	const sums = new Array(nums.length).fill(0);

	for (let i = 0; i < nums.length; i++) {
		sums[i + 1] = sums[i] + nums[i];
	}
	return mergeSort(sums, 0, sums.length - 1, lower, upper);
};
var mergeSort = function (sums, l, r, lower, upper) {
	if (l >= r) return 0;
	let ans = 0;
	const mid = (l + r) >> 1;
	ans += mergeSort(sums, l, mid, lower, upper);
	ans += mergeSort(sums, mid + 1, r, lower, upper);
	ans += countTwoPart(sums, l, mid, mid + 1, r, lower, upper);

	let k = l,
		p1 = l,
		p2 = mid + 1;
	const temp = [];
	while (p1 <= mid || p2 <= r) {
		if (p2 > r || (p1 <= mid && sums[p1] <= sums[p2])) {
			temp[k++] = sums[p1++];
		} else {
			temp[k++] = sums[p2++];
		}
	}

	for (let i = l; i <= r; i++) {
		sums[i] = temp[i];
	}

	return ans;
};

var countTwoPart = function (sums, l1, r1, l2, r2, lower, upper) {
	let ans = 0,
		k1 = l1,
		k2 = l1;

	for (let j = l2; j <= r2; j++) {
		let a = sums[j] - upper;
		let b = sums[j] - lower;
		while (k1 <= r1 && sums[k1] < a) k1++;
		while (k2 <= r1 && sums[k2] <= b) k2++;
		ans += k2 - k1;
	}

	return ans;
};
// @lc code=end
