/*
 * @Author: raphael
 * @Date: 2021-04-26 19:00:28
 * @LastEditTime: 2021-04-26 19:00:40
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @Author: raphael
 * @Date: 2021-03-24 23:26:24
 * @LastEditTime: 2021-03-25 01:25:39
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

console.log(`pancakeSort([])`, pancakeSort([9, 8, 4, 1, 3, 2, 6, 5, 7]));
console.log(`pancakeSort([])`, pancakeSort([1,2,3,4]));
9887565442322
