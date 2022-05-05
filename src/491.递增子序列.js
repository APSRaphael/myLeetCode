/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
	const res = [];
	const set = new Set();
	let len = nums.length;
	const dfs = (start, path) => {
		// 数组长度大于 1 开始保存
		if (path.length >= 2) {
			const str = path.toString();
			// 判断是不是有重复， 利用 set 来实现
			if (!set.has(str)) {
				res.push(path.slice()); // 浅拷贝一份 path
				set.add(str);
			}
		}

		for (let i = start; i < len; i++) {
			const prev = path[path.length - 1];
			const cur = nums[i];
			if (path.length === 0 || prev <= cur) {
				path.push(cur);
				dfs(i + 1, path);
				path.pop(); // 删除当前数字，选择新的组合
			}
		}
	};

	dfs(0, []);

	return res;
};

// @lc code=end
