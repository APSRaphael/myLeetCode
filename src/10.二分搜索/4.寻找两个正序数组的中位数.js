/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	let n = nums1.length;
	let m = nums2.length;
	let mid = Math.floor((n + m + 1) / 2);
	// 求中位数，如果列表是奇数个，(n+m)/2就取错了，所以加 1 再除
	let a = findK(nums1, nums2, 0, 0, mid);
	if ((n + m) % 2 === 1) return a;
	// 偶数个的时候，找到mid,以及 mid 后一位然后返回这两个值的平均数
	let b = findK(nums1, nums2, 0, 0, mid + 1);
	return (a + b) / 2;
};

var findK = function (nums1, nums2, i, j, k) {
	if (i === nums1.length) {
		return nums2[j + k - 1];
	}
	if (j === nums2.length) {
		return nums1[i + k - 1];
	}
	if (k === 1) {
		return nums1[i] < nums2[j] ? nums1[i] : nums2[j];
	}
	let a = Math.min(Math.floor(k / 2), nums1.length - i);
	let b = Math.min(k - a, nums2.length - j);
	a = k - b;

	if (nums1[i + a - 1] <= nums2[j + b - 1]) {
		return findK(nums1, nums2, i + a, j, k - a);
	}
	return findK(nums1, nums2, i, j + b, k - b);
};
// @lc code=end
