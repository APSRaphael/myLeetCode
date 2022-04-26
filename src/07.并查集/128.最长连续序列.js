/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 先去重，移除重复的数字不影响结果
	const set = new Set(nums);
	const arr = [...set];
    
	const uf = new UnionFind(arr.length);
    // 用 map 记录遍历过的数字，可以方便判断
	const map = new Map();
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		map.set(item, i);
		if (map.has(item - 1)) {
			uf.unite(i, map.get(item - 1));
		}
		if (map.has(item + 1)) {
			uf.unite(i, map.get(item + 1));
		}
	}
	return uf.max;
};

class UnionFind {
	constructor(n) {
		this.parent = new Array(n).fill(0).map((value, index) => index);
		this.rank = new Array(n).fill(1);
		this.setCount = n;
		if (n >= 1) {
			this.max = 1;
		} else {
			this.max = 0;
		}
	}

	// findSet(index) {
	// 	if (this.parent[index] !== index) {
	// 		this.parent[index] = this.findSet(this.parent[index]);
	// 	}
	// 	return this.parent[index];
	// }
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
			if (this.rank[root1] > this.max) {
				this.max = this.rank[root1];
			}
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
