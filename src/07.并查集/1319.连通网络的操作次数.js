/*
 * @lc app=leetcode.cn id=1319 lang=javascript
 *
 * [1319] 连通网络的操作次数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
	if (connections.length < n - 1) return -1;
	const uf = new UnionFind(n);
	for (const connection of connections) {
		let a = connection[0];
		let b = connection[1];
		uf.unite(a, b);
	}

	return uf.getCount() - 1;
};

class UnionFind {
	constructor(n, m) {
		this.parent = new Array(n).fill(0).map((value, index) => index);

		this.rank = new Array(n).fill(1);

		this.count = m || n;
	}

	findSet(index) {
		return this.parent[index] === index
			? this.parent[index]
			: (this.parent[index] = this.findSet(this.parent[index]));
	}

	unite(index1, index2) {
		let root1 = this.findSet(index1),
			root2 = this.findSet(index2);

		if (root1 !== root2) {
			if (root1 < root2) {
				[root1, root2] = [root2, root1];
			}
			this.parent[root2] = root1;
			this.rank[root1] += this.rank[root2];
			this.count--;
		}
	}

	getCount() {
		return this.count;
	}

	connected(index1, index2) {
		return this.findSet(index1) === this.findSet(index2);
	}
}
// @lc code=end
