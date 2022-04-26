/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
	const num = stones.length;
	const uf = new UnionFind(num);
	for (let i = 0; i < num; i++) {
		for (let j = i + 1; j < num; j++) {
			const [x1, y1] = stones[i];
			const [x2, y2] = stones[j];
			if (x1 == x2 || y1 == y2) {
				uf.unite(i, j);
			}
		}
	}
    return num - uf.getCount()
};

class UnionFind {
	constructor(n) {
		this.parent = new Array(n).fill(0).map((value, index) => index);
		this.rank = new Array(n).fill(1);
		this.setCount = n;
	}

	findSet(index) {
		return this.parent[index] !== index
			? (this.parent[index] = this.findSet(this.parent[index]))
			: this.parent[index];
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
			this.setCount--;
		}
	}

	getCount() {
		return this.setCount;
	}

	connected(index1, index2) {
		return this.findSet(index1) === this.findSet(index2);
	}
}

// @lc code=end
