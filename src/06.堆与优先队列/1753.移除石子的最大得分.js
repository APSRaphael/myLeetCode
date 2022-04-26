/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-29 15:59:26
 * @LastEditTime: 2021-04-29 16:20:08
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:  
 */
/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
	let point = 0;
	const arr = [a, b, c];
	arr.sort((a, b) => a - b);
	if (arr[2] - arr[1] >= arr[0]) {
		point = arr[0] + arr[1];
	} else {
		point = arr[2] - arr[1];
		arr[0] = arr[0] - point;
        const half = Math.floor(arr[0] / 2)
		point += half* 2 + arr[1] - half
	}
    return point
};
// @lc code=end
