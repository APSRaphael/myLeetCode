/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
	const cnt = [];
	for (let i = 0; i < arr1.length; i++) {
		if (cnt[arr1[i]]) {
			cnt[arr1[i]] += 1;
		} else {
			cnt[arr1[i]] = 1;
		}
	}
	let k = 0;
	for (let j = 0; j < arr2.length; j++) {
		// for (let l = 0; l < cnt[arr2[j]]; l++) {
		// 	arr1[k++] = arr2[j];
		// }
		// cnt[arr2[j]] = 0;
		// 上面的代码可以优化成下面的
		while (cnt[arr2[j]]--) arr1[k++] = arr2[j];
	}
	for (let i = 0; i < 1001; i++) {
		// if (cnt[i] == 0) continue;
		// for (let j = 0; j < cnt[i]; j++) {
		// 	arr1[k++] = i;
		// }
		// 上面的代码可以优化成下面的
		if (cnt[i] <= 0) continue;
		while (cnt[i]--) arr1[k++] = i;
	}
	return arr1;
};
// @lc code=end
