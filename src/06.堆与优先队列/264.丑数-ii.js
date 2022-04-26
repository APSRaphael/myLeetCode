/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
	const arr = [1];
	const k = n;
	let p2 = 0,
		p3 = 0,
		p5 = 0;

	while (--n) {
		const minNum = Math.min(arr[p2] * 2, Math.min(arr[p3] * 3, arr[p5] * 5));

		if (minNum == arr[p2] * 2) p2++;
		if (minNum == arr[p3] * 3) p3++;
		if (minNum == arr[p5] * 5) p5++;
		arr.push(minNum);
	}
	return arr[k - 1];
};
// @lc code=end
