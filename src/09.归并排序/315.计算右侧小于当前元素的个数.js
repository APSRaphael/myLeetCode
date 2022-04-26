/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var countSmaller = function (nums) {
// 	var mergeSort = function (arr, l, r) {
// 		if (l >= r) return;
// 		const mid = (l + r) >> 1;
// 		mergeSort(arr, l, mid);
// 		mergeSort(arr, mid + 1, r);
// 		let k = l,
// 			p1 = l,
// 			p2 = mid + 1;
// 		while (p1 <= mid || p2 <= r) {
// 			if (p2 > r || (p1 <= mid && arr[p1].val > arr[p2].val)) {
// 				arr[p1].cnt += r - p2 + 1;
// 				temp[k++] = arr[p1++];
// 			} else {
// 				temp[k++] = arr[p2++];
// 			}
// 		}

// 		for (let i = l; i <= r; i++) {
// 			arr[i] = temp[i];
// 		}
// 		return;
// 	};

// 	const arr = [];
// 	const temp = [];
// 	for (let i = 0; i < nums.length; i++) {
// 		arr.push({ cnt: 0, val: nums[i], ind: i });
// 	}
// 	mergeSort(arr, 0, arr.length - 1);

// 	const ret = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const item = arr[i];
// 		ret[item.ind] = item.cnt;
// 	}
// 	return ret;
// };

var mergeSort = function (arr, l, r) {};

var countSmaller = function (nums) {
	const arr = [];

	for (let i = 0; i < nums.length; i++) {
		arr.push({ val: nums[i], cnt: 0, ind: i });
	}

	mergeSort(arr, 0, arr.length - 1);

	const ret = [];
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		ret[item.ind] = item.cnt;
	}
	return ret;
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
		if (p2 > r || (p1 <= mid && arr[p1].val > arr[p2].val)) {
			arr[p1].cnt += r - p2 + 1;
			temp[k++] = arr[p1++];
		} else {
			temp[k++] = arr[p2++];
		}

	}

	for (let i = l; i <= r; i++) {
		arr[i] = temp[i];
	}
};

// @lc code=end
