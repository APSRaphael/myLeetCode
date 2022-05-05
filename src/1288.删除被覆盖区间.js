/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
// var removeCoveredIntervals = function (intervals) {
// 	//对区间进行排序，先根据 item[0]排，如果相同再根据 item[1]排序
// 	// 这样排序出来的数组，前一个的左区间一定小于等于后一个的左区间
// 	intervals.sort((a, b) => {
// 		if (a[0] === b[0]) return a[1] - b[1];
// 		return a[0] - b[0];
// 	});

// 	let max = -1,
// 		left = -1,
// 		cnt = 0;

// 	for (let i = 0; i < intervals.length; i++) {
// 		const item = intervals[i];
// 		if (max >= item[1]) {
// 			// 如果前一个的右区间大于后一个的右区间，说明后一个被前一个的包裹了
// 			cnt += 1;
// 		} else {
// 			// 后一个的右区间大
// 			if (left === item[0]) {
// 				// 如果左区间相同，说明前面这个区间被后面的包裹了
// 				cnt += 1;
// 			}
// 			// 更新左区间跟右区间最大值
// 			left = item[0];
// 			max = item[1];
// 		}
// 	}

// 	return intervals.length - cnt;
// };


// 下面是更好的解法，区别在于对区间的右区间的排序，对于左区间相同的区间，右区间按降序排列
var removeCoveredIntervals = function (intervals) {
	//对区间进行排序，先根据 item[0]排，如果相同再根据 item[1]排序
	// 这样排序出来的数组，前一个的左区间一定小于等于后一个的左区间
	intervals.sort((a, b) => {
		if (a[0] === b[0]) return b[1] - a[1];
		return a[0] - b[0];
	});

	let max = -1,
		cnt = 0;

	for (let i = 0; i < intervals.length; i++) {
		const item = intervals[i];
		if (max >= item[1]) {
			// 如果前一个的右区间大于后一个的右区间，说明后一个被前一个的包裹了
			cnt += 1;
		} else {
			max = item[1];
		}
	}

	return intervals.length - cnt;
};
// @lc code=end
