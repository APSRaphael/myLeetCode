/*
 * @lc app=leetcode.cn id=721 lang=javascript
 *
 * [721] 账户合并
 */

arr = [
	{ id: 2, parentId: 0 },
	{ id: 1, parentId: 2 },
	{ id: 3, parentId: 2 },
	{ id: 4, parentId: 3 },
	{ id: 6, parentId: 5 },
];
// 使用 Map
// 先记录所有 parentId


// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
	const len = accounts.length;
	const uf = new UnionFind(len);

	const emailToIndex = new Map();

	for (let i = 0; i < len; i++) {
		const account = accounts[i];
		for (let j = 1; j < account.length; j++) {
			const email = account[j];
			if (!emailToIndex.has(email)) {
				emailToIndex.set(email, i);
			} else {
				uf.unite(i, emailToIndex.get(email));
			}
		}
	}
	const accountMap = new Map();
	const parent = uf.parent;
	for (let i = 0; i < parent.length; i++) {
		// 先更新所有 parent 的 value， 统一所有相关联的值
		parent[i] = uf.findSet(i);
		if (accountMap.has(parent[i])) {
			const arr = Array.from(
				new Set(accountMap.get(parent[i]).concat(accounts[i]))
			);
			accountMap.set(parent[i], arr);
		} else {
			accountMap.set(parent[i], Array.from(new Set(accounts[i])));
		}
	}
	const arr = [];
	for (const account of accountMap.values()) {
		const name = account.shift();
		account.sort();
		account.unshift(name);
		arr.push(account);
	}
	return arr;
};

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

// @lc code=end


arr = [
	{ id: 2, parentId: 0 },
	{ id: 1, parentId: 2 },
	{ id: 3, parentId: 2 },
	{ id: 4, parentId: 3 },
	{ id: 6, parentId: 5 },
];
// 使用 Map
// 先记录所有 parentId
const map = new Map([])
for (let i = 0; i < arr.length; i++) {
	const el = arr[i];
	map.set(el.id, el.parentId)
}
console.log('map :>> ', map); // hk-log

const getTree = (id)=>{
	if(map.has(id)){
		const parentId = map.get(id)
		map.set(id,)
	}
}
const has = map.has(4)
const parentId = map.get(2)
console.log('has :>> ', has); // hk-log
console.log('parentId :>> ', parentId); // hk-log

const has2 = map.has(parentId)
console.log('has2 :>> ', has2); // hk-log
