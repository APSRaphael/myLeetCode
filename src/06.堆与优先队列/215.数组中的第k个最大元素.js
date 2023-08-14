/*
 * @Author: raphael
 * @Date: 2021-04-24 23:29:32
 * @LastEditTime: 2021-04-24 23:39:26
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
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

var findKthLargest = function (nums, k) {
	if (!nums.length) return null;
	const maxHeap = new MaxHeap(nums);
	let res = 0;
	while (k) {
		res = maxHeap.deleteItem();
		k--;
	}
	return res;
};

// var findKthLargest = function (nums, k) {
// 	if (!nums.length) return null;
// 	const maxHeap = new MaxPriorityQueue();
// 	for (let i = 0; i < nums.length; i++) {
// 		maxHeap.enqueue('x', nums[i]);
// 	}
// 	let res = 0;
// 	while (k) {
// 		res = maxHeap.dequeue()['priority'];
// 		k--;
// 	}
// 	return res;
// };
// @lc code=end
