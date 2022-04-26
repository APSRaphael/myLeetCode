/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-25 16:03:19
 * @LastEditTime: 2021-03-30 00:20:26
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
	const freq = _.countBy(tasks);
	const arr = Object.values(freq);
	const maxExec = Math.max(...arr);
	let maxCount = 0;
	arr.forEach((item) => {
		if (item === maxExec) {
			maxCount++;
		}
	});

	return Math.max(tasks.length, (maxExec - 1) * (n + 1) + maxCount);
};
// @lc code=end
