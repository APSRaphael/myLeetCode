/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-29 14:36:49
 * @LastEditTime: 2021-04-29 15:14:42
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */

/**
 * initialize your data structure here.
 */

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
		return this.data[a] - this.data[b];
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
		return this.data[a] - this.data[b];
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
var MedianFinder = function () {
	this.left = new MaxHeap();
	this.right = new MinHeap();
};
MedianFinder.prototype.resize = function () {
	if (this.left.size() - this.right.size() >= 2) {
		this.right.addItem(this.left.deleteItem());
	} else if (this.right.size() > this.left.size()) {
		this.left.addItem(this.right.deleteItem());
	}
};
/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
	if (num <= this.left.topItem()) {
		this.left.addItem(num);
	} else {
		this.right.addItem(num);
	}
	this.resize();
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    console.log(`this.left.data`, this.left.data)
    console.log(`this.right.data`, this.right.data)
	if (this.left.size() === this.right.size()) {
		return (this.left.topItem() + this.right.topItem()) / 2;
	}
	return this.left.topItem();
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


const medianFinder = new MedianFinder()

console.log(`medianFinder.findMedian`, medianFinder.findMedian())
medianFinder.addNum(1)
medianFinder.addNum(2)
console.log(`medianFinder.findMedian`, medianFinder.findMedian())
