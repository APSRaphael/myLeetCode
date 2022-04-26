/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	if (amount === 0) return 0;
	const dp = new Array(amount + 1).fill(Infinity);
	dp[0] = 0;
	for (let i = 0; i < dp.length; i++) {
		for (let j = 0; j < coins.length; j++) {
			if (i - coins[j] >= 0) {
				console.log('rount start i :>> ', i); // hk-log
				console.log('dp[i] :>> ', dp[i]); // hk-log
				dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
				console.log('dp :>> ', dp); // hk-log
				console.log('rount end j :>> ', j); // hk-log
			}
		}
	}

	return dp[amount] === Infinity ? -1 : dp[amount];
};

coinChange([1, 2, 5], 11);

// @lc code=end
