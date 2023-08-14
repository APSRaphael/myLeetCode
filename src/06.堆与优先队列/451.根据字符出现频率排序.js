/*
 * @Author: raphael
 * @Date: 2021-04-26 18:05:47
 * @LastEditTime: 2021-04-27 16:37:46
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
	const map = new Map();
	let str = '';
	for (const w of s) {
		map.set(w, (map.get(w) || 0) + 1);
		// map.set(w, map.has(w) ? map.get(w) + 1 : 1);
	}
	const arr = [...map].sort((a, b) => b[1] - a[1]);
	for (let i = 0; i < arr.length; i++) {
		const [k, v] = arr[i];
		for (let j = 0; j < v; j++) {
			str += k;
		}
	}
    return str
};
// @lc code=end
