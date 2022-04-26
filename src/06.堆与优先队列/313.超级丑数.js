/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-29 15:39:46
 * @LastEditTime: 2021-04-29 19:26:24
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
	const res = [1];
	const arr = new Array(primes.length).fill(0);
	const k = n;
	while (--n) {
		let minNum = Infinity;

		for (let i = 0; i < primes.length; i++) {
			minNum = Math.min(minNum, res[arr[i]] * primes[i]);
		}

		for (let j = 0; j < primes.length; j++) {
			if (minNum === res[arr[j]] * primes[j]) {
				arr[j] += 1;
			}
		}
		res.push(minNum);
	}
	return res[k - 1];
};
// @lc code=end
