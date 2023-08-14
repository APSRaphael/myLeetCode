/*
 * @Author: raphael
 * @Date: 2021-04-24 23:29:23
 * @LastEditTime: 2021-04-25 14:39:44
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
	this.k = k;
	this.heap = new MinHeap();
	for (const n of nums) {
		this.add(n);
	}
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
	this.heap.addItem(val);
	if (this.heap.size() > this.k) {
		this.heap.deleteItem();
	}
	return this.heap.topItem();
};

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
		return a - b;
	}

	topItem() {
        if(!this.size()) return null
		return this.data[0];
	}

	swap(i, j) {
		if (i === j) return;
		[this.data[i], this.data[j]] = [this.data[j], this.data[i]];
	}

	addItem(val) {
		this.data.push(val);
		this.itemUp(this.size() - 1);
	}

	deleteItem() {
		if (!this.size()) return null;
		if (this.size() < 3) return this.data.shift();
		const res = this.data[0];
		this.data[0] = this.data.pop();
		this.itemDown(0);
		return res;
	}

	itemUp(index) {
		while (index) {
			const parentIndex = (index - 1) >> 1;
			if (this.compator(this.data[index], this.data[parentIndex]) < 0) {
				this.swap(index, parentIndex);
				index = parentIndex;
			} else {
				break;
			}
		}
	}

	itemDown(index) {
		const lastIndex = this.size() - 1;
		while (index < lastIndex) {
			const leftIndex = index * 2 + 1;
			const rightIndex = index * 2 + 2;
			let findIndex = index;
			if (
				leftIndex <= lastIndex &&
				this.compator(this.data[leftIndex], this.data[findIndex]) < 0
			) {
				findIndex = leftIndex;
			}
			if (
				rightIndex <= lastIndex &&
				this.compator(this.data[rightIndex], this.data[findIndex]) < 0
			) {
				findIndex = rightIndex;
			}
			if (index !== findIndex) {
				this.swap(index, findIndex);
				index = findIndex;
			} else {
				break;
			}
		}
	}
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
