/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
	const size = edges.length;
	const uf = new UnionFind(size);
	for (const edge of edges) {
		let a = edge[0];
		let b = edge[1];
		if (uf.connected(a, b)) return edge;
		uf.unite(a, b);
	}
	return [];
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
