/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
	let five = 0,
		ten = 0;
	for (const bill of bills) {
		if (bill === 5) {
			five++;
		}
		if (bill === 10) {
			ten++
			five--;
		}
		if (bill === 20) {
			if (ten && five) {
				ten--;
				five--;
			} else if (five >= 3) {
				five -= 3;
			} else {
				return false;
			}
		}
		if (five < 0) {
			return false;
		}
	}
	return true;
};
// @lc code=end
