/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
	const n = grid.length;
	const m = grid[0].length;
	const num = n * m;
	let count = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (grid[i][j] === '1') {
				count++;
			}
		}
	}
	const uf = new UnionFind(num, count);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (grid[i][j] === '1') {
				if (i - 1 >= 0 && grid[i - 1][j] === '1') {
					uf.unite(i * m + j, (i - 1) * m + j);
				}
				if (j - 1 >= 0 && grid[i][j - 1] === '1') {
					uf.unite(i * m + j, i * m + (j - 1));
				}
			}
		}
	}

	return uf.getCount();
};

class UnionFind {
	constructor(n, m) {
		this.parent = new Array(n).fill(0).map((value, index) => index);

		this.rank = new Array(n).fill(1);

		this.count = m;
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
