/*
 * @Author: raphael
 * @Date: 2021-04-29 16:31:39
 * @LastEditTime: 2021-05-12 15:30:49
 * @LastEditors: raphael
 * @Description:
 */

/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function (orders) {
	const sell = new MinHeap();
	const buy = new MaxHeap();
	for (let i = 0; i < orders.length; i++) {
		let [price, amount, type] = orders[i];
		if (type === 0) {
			while (amount && sell.size() && price >= sell.topItem()[0]) {
				const cnt = Math.min(amount, sell.topItem()[1]);
				amount -= cnt;
				sell.topItem()[1] -= cnt;
				if (sell.topItem()[1] === 0) sell.deleteItem();
			}
			if (amount) buy.addItem([price, amount]);
		} else {
			while (amount && buy.size() && price <= buy.topItem()[0]) {
				const cnt = Math.min(amount, buy.topItem()[1]);
				amount -= cnt;
				buy.topItem()[1] -= cnt;
				if (buy.topItem()[1] === 0) buy.deleteItem();
			}
			if (amount) sell.addItem([price, amount]);
		}
	}
	let sum = 0;
	const mod = 1000000007;
	for (let i = 0; i < buy.size(); i++) {
		sum = (sum + buy.data[i][1]) % mod;
	}
	for (let i = 0; i < sell.size(); i++) {
		sum = (sum + sell.data[i][1]) % mod;
	}
	return sum;
};
class MaxHeap {
	constructor(data = []) {
		this.data = data;
		this.init();
	}
	size() {
		return this.data.length;
	}
	init() {
		if (this.size() < 2) return;
		for (let i = 1; i < this.size(); i++) {
			this.itemUp(i);
		}
	}

	compator(a, b) {
		return this.data[a][0] - this.data[b][0];
	}
	swap(i, j) {
		if (i === j) return;
		[this.data[i], this.data[j]] = [this.data[j], this.data[i]];
	}

	addItem(val) {
		this.data.push(val);
		this.itemUp(this.size() - 1);
	}

	topItem() {
		if (!this.size()) return null;
		return this.data[0];
	}
	deleteItem() {
		if (!this.size()) return null;
		if (this.size() < 3) return this.data.shift();
		const res = this.data[0];
		this.data[0] = this.data.pop();
		this.itemDown(0);
		return res;
	}

	itemDown(index) {
		const lastIndex = this.size() - 1;
		while (index < lastIndex) {
			const leftIndex = index * 2 + 1;
			const rightIndex = index * 2 + 2;
			let findIndex = index;
			if (leftIndex <= lastIndex && this.compator(leftIndex, findIndex) > 0) {
				findIndex = leftIndex;
			}
			if (rightIndex <= lastIndex && this.compator(rightIndex, findIndex) > 0) {
				findIndex = rightIndex;
			}
			if (findIndex !== index) {
				this.swap(findIndex, index);
				index = findIndex;
			} else {
				break;
			}
		}
	}

	itemUp(index) {
		while (index) {
			const parentIndex = (index - 1) >> 1;
			if (this.compator(index, parentIndex) > 0) {
				this.swap(index, parentIndex);
				index = parentIndex;
			} else {
				break;
			}
		}
	}
}
class MinHeap {
	constructor(data = []) {
		this.data = data;
		this.init();
	}
	size() {
		return this.data.length;
	}
	init() {
		if (this.size() < 2) return;
		for (let i = 1; i < this.size(); i++) {
			this.itemUp(i);
		}
	}
	compator(a, b) {
		return this.data[a][0] - this.data[b][0];
	}
	swap(i, j) {
		if (i === j) return;
		[this.data[i], this.data[j]] = [this.data[j], this.data[i]];
	}

	addItem(val) {
		this.data.push(val);
		this.itemUp(this.size() - 1);
	}

	topItem() {
		if (!this.size()) return null;
		return this.data[0];
	}
	deleteItem() {
		if (!this.size()) return null;
		if (this.size() < 3) return this.data.shift();
		const res = this.data[0];
		this.data[0] = this.data.pop();
		this.itemDown(0);
		return res;
	}

	itemDown(index) {
		const lastIndex = this.size() - 1;
		while (index < lastIndex) {
			const leftIndex = index * 2 + 1;
			const rightIndex = index * 2 + 2;
			let findIndex = index;
			if (leftIndex <= lastIndex && this.compator(leftIndex, findIndex) < 0) {
				findIndex = leftIndex;
			}
			if (rightIndex <= lastIndex && this.compator(rightIndex, findIndex) < 0) {
				findIndex = rightIndex;
			}
			if (findIndex !== index) {
				this.swap(findIndex, index);
				index = findIndex;
			} else {
				break;
			}
		}
	}
	itemUp(index) {
		while (index) {
			const parentIndex = (index - 1) >> 1;
			if (this.compator(index, parentIndex) < 0) {
				this.swap(index, parentIndex);
				index = parentIndex;
			} else {
				break;
			}
		}
	}
}

getNumberOfBacklogOrders([
	[26, 7, 0],
	[16, 1, 1],
	[14, 20, 0],
	[23, 15, 1],
	[24, 26, 0],
	[19, 4, 1],
	[1, 1, 0],
]);
