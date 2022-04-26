/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	const arr = [];
    // 拆分区间，左区间记作[item[0]，+1]，右区间记作[[item[1], -1]]
    // 对数据右区间的值进行求和，如果等于 0，就记录一个区间范围。
	for (let i = 0; i < intervals.length; i++) {
		const item = intervals[i];
		arr.push([item[0], +1]);
		arr.push([item[1], -1]);
	}
    // 先通过左区间从小到大排序，如果左区间相同，右区间的值是 +1 排前面，-1 排后面
	arr.sort((a, b) => {
		if (a[0] - b[0] === 0) {
			return b[1] - a[1];
		} else {
			return a[0] - b[0];
		}
	});

	const ret = [];
	let left = -1,
		cnt = 0;
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		cnt += item[1]; // 右区间的值累加
		if (left === -1) left = item[0]; // 判断一下是不是要更新左区间
		if (cnt === 0) {
            // 右区间值累加为 0, 添加一个区间
			ret.push([left, item[0]]);
            // 重置左值
			left = -1;
		}
	}
	return ret;
};
// @lc code=end
