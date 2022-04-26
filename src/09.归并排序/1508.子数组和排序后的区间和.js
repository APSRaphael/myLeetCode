/*
 * @lc app=leetcode.cn id=1508 lang=javascript
 *
 * [1508] 子数组和排序后的区间和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
	const arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(nums[i]);
		let temp = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			temp += nums[j];
			arr.push(temp);
		}
	}

	// arr.sort((a, b) => a - b); 从小到大排序可以直接是用这个方法。
	mergeSort(arr, 0, arr.length - 1);
	let ans = 0;
	for (let i = left - 1; i <= right - 1; i++) {
		ans += arr[i];
	}
	return ans % (1e9 + 7); // 1e9 + 7 === 1000000007
};

var mergeSort = function (arr, l, r) {
	if (l >= r) return;
	const mid = (l + r) >> 1;
	mergeSort(arr, l, mid);
	mergeSort(arr, mid + 1, r);
	let k = l,
		p1 = l,
		p2 = mid + 1;
	const temp = [];
	while (p1 <= mid || p2 <= r) {
		if (p2 > r || (p1 <= mid && arr[p1] <= arr[p2])) {
			temp[k++] = arr[p1++];
		} else {
			temp[k++] = arr[p2++];
		}
	}

	for (let j = l; j <= r; j++) {
		arr[j] = temp[j];
	}
};

// @lc code=end
