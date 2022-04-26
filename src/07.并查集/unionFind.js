class UnionFind {
	constructor(n) {
		this.parent = new Array(n).fill(0).map((value, index) => index);
		this.rank = new Array(n).fill(1);
		this.setCount = n;
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
