/*
 * @Author: raphael
 * @Date: 2021-04-24 22:35:49
 * @LastEditTime: 2021-04-26 09:51:40
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
class MaxHeap {
	constructor(data) {
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

	swap(i, j) {
		if (i === j) return;
		[this.data[i], this.data[j]] = [this.data[j], this.data[i]];
	}

	topItem() {
		if (!this.size()) return null;
		return this.data[0];
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
			if (this.compator(this.data[index], this.data[parentIndex]) > 0) {
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
				this.compator(this.data[leftIndex], this.data[findIndex]) > 0
			) {
				findIndex = leftIndex;
			}
			if (
				rightIndex <= lastIndex &&
				this.compator(this.data[rightIndex], this.data[findIndex]) > 0
			) {
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
}

var lastStoneWeight = function (stones) {
	const maxHeap = new MaxHeap(stones);
	while (maxHeap.size() > 1) {
		const x = maxHeap.deleteItem();
		const y = maxHeap.deleteItem();
		if (x !== y) {
			maxHeap.addItem(x - y);
		}
	}
	if (maxHeap.size()) {
		return maxHeap.topItem();
	}
	return maxHeap.size();
};

// var lastStoneWeight = function (stones) {
// 	const maxHeap = new MaxPriorityQueue();
// 	for (let i = 0; i < stones.length; i++) {
// 		maxHeap.enqueue('x', stones[i]);
// 	}
// 	while (maxHeap.size() > 5) {
// 		const a = maxHeap.dequeue()['priority'];
// 		const b = maxHeap.dequeue()['priority'];
// 		if (a > b) {
// 			maxHeap.enqueue('x', a - b);
// 		}
// 	}

// 	return maxHeap.isEmpty() ? 0 : maxHeap.dequeue()['priority'];
// };

// @lc code=end
