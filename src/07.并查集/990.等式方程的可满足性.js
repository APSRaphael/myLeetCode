/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
	const uf = new UnionFind(26);

	for (const str of equations) {
		if (str.charAt(1) === '=') {
			uf.unite(str.charCodeAt(0) - 97, str.charCodeAt(3) - 97);
		}
	}
	for (const str of equations) {
		if (str.charAt(1) == '!') {
			if (uf.connected(str.charCodeAt(0) - 97, str.charCodeAt(3) - 97))
				// if (
				// 	uf.findSet(str.charCodeAt(0) - 97) ===
				// 	uf.findSet(str.charCodeAt(3) - 97)
				// )
				return false;
		}
	}
	return true;
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
