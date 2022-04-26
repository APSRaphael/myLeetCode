/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-25 00:00:02
 * @LastEditTime: 2021-04-25 14:59:40
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:  
 */
/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

class MaxHeap {
	constructor(data) {
		this.data = data;
		this.init();
	}

	compator(a, b) {
		return (
			this.data[a]?.[0] +
			this.data[a]?.[1] -
			(this.data[b]?.[0] + this.data[b]?.[1])
		);
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

	swap(i, j) {
		if (i === j) return;
		[this.data[i], this.data[j]] = [this.data[j], this.data[i]];
	}

	topItem() {
		if (!this.size()) return null;
		return this.data[0][0] + this.data[0][1];
	}

	addItem(item) {
		this.data.push(item);
		this.itemUp(this.size() - 1);
	}

	deleteItem() {
		if (!this.size()) return null;
		if (this.size() <= 2) this.data.shift();
		let res = this.data[0];
		this.data[0] = this.data.pop();
		this.itemDown(0);
		return res;
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
			if (index !== findIndex) {
				this.swap(index, findIndex);
				index = findIndex;
			} else {
				break;
			}
		}
	}
}

var kSmallestPairs = function (nums1, nums2, k) {
	const maxHeap = new MaxHeap([]);
	for (let i = 0; i < nums1.length; i++) {
		const item1 = nums1[i];
		for (let j = 0; j < nums2.length; j++) {
			const item2 = nums2[j];
			if (maxHeap.size() < k) {
                maxHeap.addItem([item1, item2]);
			} else {
                if (maxHeap.topItem() > (item1 + item2)) {
					maxHeap.addItem([item1, item2]);
					maxHeap.deleteItem();
				} else {
					break;
				}
			}
		}
	}
	return maxHeap.data;
};
// @lc code=end
