/*
 * @Author: raphael
 * @Date: 2021-03-24 23:26:24
 * @LastEditTime: 2021-04-27 09:59:13
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
	let ans = [],
		max;
	while (arr.length > 1) {
		max = getMaxIndex(arr);
		max > 0 && ans.push(max + 1);
		reverse(arr, max);
		reverse(arr, arr.length - 1);
		ans.push(arr.length);
		arr.pop();
	}
    return ans
};

var getMaxIndex = function (arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[max]) {
			max = i;
		}
	}
	return max;
};

var reverse = function (arr, k) {
	if (k < 1) return;
	let i = 0,
		j = k;
	while (i < j) {
		[arr[i], arr[j]] = [arr[j], arr[i]];
		i++;
		j--;
	}
};
// @lc code=end

