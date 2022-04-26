/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-31 14:24:05
 * @LastEditTime: 2021-04-26 18:59:57
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:  
 */
/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

const logs = ["0:start:0","1:start:2","1:end:5","0:end:6","2:start:7","0:end:7"]
var exclusiveTime = function (n, logs) {
	const stack = new Array(n).fill(0);
	let go = 0;
	function next() {
		let dure = 0;
		const start = logs[go].split(':');
		while (go < logs.length - 1 && logs[go + 1].indexOf('s') !== -1) {
			go++;
			dure = dure + next();
		}
		const end = logs[++go].split(':');
		let sum = Number(end[2]) - Number(start[2]) + 1 - dure;
		stack[Number(start[0])] = stack[Number(start[0])] + sum;
		return sum + dure;
	}
	while (go < logs.length - 1) {
		next();
		go++;
	}
	return stack;
};

exclusiveTime(3, logs)
// @lc code=end

