/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
	const g = []; // 每个节点指向的其他节点的集合
	const q = []; // 入度为 0 的节点放到这里面
	const indeg = new Array(numCourses).fill(0); // 记录节点的入度
	for (let i = 0; i < prerequisites.length; i++) {
		const item = prerequisites[i];
        // item[0] 依赖 item[1]的完成 所以 item[0]入度就加 1
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
		// 把度为 0 的节点都放到 q 中
		if (indeg[i] == 0) q.push(i);
	}
	let cnt = 0; 
	while (q.length) {
		let ind = q.shift();
		cnt += 1;
		const arr = g[ind] || [];
		for (let i = 0; i < arr.length; i++) {
			const item = arr[i];
			indeg[item] -= 1;
			// 入度为 0 就添加到 q 中
			if (indeg[item] == 0) q.push(item);
		}
	}

	return cnt === numCourses;
};

// @lc code=end
