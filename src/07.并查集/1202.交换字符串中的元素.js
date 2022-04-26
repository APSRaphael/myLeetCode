/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
	const len = s.length;
	const uf = new UnionFind(len);
	for (let i = 0; i < pairs.length; i++) {
		let index1 = pairs[i][0],
			index2 = pairs[i][1];
		if (!uf.connected(index1, index2)) {
			uf.unite(index1, index2);
		}
	}

	const parent = uf.parent;
	const obj = {};
	for (let i = 0; i < len; i++) {
		// 先更新所有 parent 的 value
		parent[i] = uf.findSet(i);
		if (obj[parent[i]]) {
			obj[parent[i]].push(s.charAt(i));
		} else {
			obj[parent[i]] = [s.charAt(i)];
		}
	}
	Object.keys(obj).forEach((item) =>
    obj[item].sort((a, b) => a.charCodeAt() - b.charCodeAt())
	);
    let str = ''
    for (let i = 0; i < len; i++) {
        str += obj[parent[i]].shift()
    }
    return str
};

class UnionFind {
	constructor(n) {
		this.parent = new Array(n).fill(0).map((value, index) => index);
		// this.rank = new Array(n).fill(1);
		// this.setCount = n;
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
			// this.rank[root1] += this.rank[root2];
			// this.setCount--;
		}
	}

	// getCount() {
	// 	return this.setCount;
	// }

	connected(index1, index2) {
		return this.findSet(index1) === this.findSet(index2);
	}
}
// @lc code=end
