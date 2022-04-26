/*
 * @lc app=leetcode.cn id=685 lang=javascript
 *
 * [685] 冗余连接 II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
	let nodeCount = edges.length;
	const uf = new UnionFind(nodeCount + 1);
	const parent = [];
	for (let i = 1; i < nodeCount + 1; i++) {
		parent[i] = i;
	}
	let conflit = -1;
	let cycle = -1;
	for (i in edges) {
		const edge = edges[i];
		let node1 = edge[0],
			node2 = edge[1];
		if (parent[node2] !== node2) {
			conflit = i;
		} else {
			parent[node2] = node1;
			if (uf.findSet(node1) === uf.findSet(node2)) {
				cycle = i;
			} else {
				uf.unite(node1, node2);
			}
		}
	}

	if (conflit < 0) {
		return edges[cycle];
	} else {
		let conflictEdge = edges[conflit];
		if (cycle >= 0) {
			return [parent[conflictEdge[1]], conflictEdge[1]];
		} else {
			return conflictEdge;
		}
	}
};

class UnionFind {
	constructor(n) {
		this.parent = [];
		for (let i = 0; i <= n; i++) {
			this.parent[i] = i;
		}
	}

	// findSet(index) {
	// 	if (this.parent[index] !== index) {
	// 		this.parent[index] = this.findSet(this.parent[index]);
	// 	}
	// 	return this.parent[index];
	// }
	findSet(index) {
		if (this.parent[index] != index) {
			this.parent[index] = this.findSet(this.parent[index]);
		}
		return this.parent[index];
	}

	unite(index1, index2) {
		this.parent[this.findSet(index1)] = this.findSet(index2);
	}
}
// @lc code=end
