/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
	const indeg = [],
		q = [],
		g = [];

	for (let i = 0; i < prerequisites.length; i++) {
		const item = prerequisites[i];
        
		if (indeg[item[0]]) {
			indeg[item[0]] += 1;
		} else {
			indeg[item[0]] = 1;
		}
        
		if (g[item[1]]) {
            g[item[1]].push(item[0]);
		} else {
            g[item[1]] = [item[0]];
		}
	}

	for (let i = 0; i < numCourses; i++) {
		const item = indeg[i];
		if (!item) {
			q.push(i);
		}
	}
    
	let ans = 0;
	const queue = [];
	while (q.length) {
		const ind = q.shift();
		ans += 1;
		// 从 q 中出来的就是课程的排序，入度为 0 的最先出来。之后的课程入度降低到 0 之后添加到 q 的末尾
		queue.push(ind);
		const arr = g[ind] || [];
		for (let i = 0; i < arr.length; i++) {
			const k = arr[i];
			indeg[k]--;
			if (indeg[k] == 0) q.push(k);
		}
	}
	if (ans === numCourses) {
		return queue;
	} else {
		return [];
	}
};
// @lc code=end
