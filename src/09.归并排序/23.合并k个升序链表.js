/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	const minHeap = new MinHeap([]);
	const ret = new ListNode(-1);
	let p = ret;
	for (let i = 0; i < lists.length; i++) {
		const node = lists[i];
		if (node) {
			minHeap.offer(node);
		}
	}
	while (minHeap.size()) {
		const top = minHeap.poll();
		p.next = top;
		if (top.next) {
			minHeap.offer(top.next);
		}
		p = p.next;
	}

	return ret.next;
};

class MinHeap {
	constructor(data) {
		this.data = data;
		this.compare = (a, b) => a.val - b.val;
		this.heapify();
	}

	size() {
		return this.data.length;
	}

	heapify() {
		if (this.size() < 2) {
			return;
		}

		for (let i = 1; i < this.size(); i++) {
			this.bubbleUp(i);
		}
	}

	peek() {
		if (!this.size()) return null;
		return this.data[0];
	}

	offer(val) {
		this.data.push(val);
		this.bubbleUp(this.size() - 1);
	}

	poll() {
		if (this.size() < 1) return null;
		if (this.size() < 3) return this.data.shift();
		const top = this.data[0];
		this.data[0] = this.data.pop();
		this.bubbleDown(0);
		return top;
	}

	swap(i, j) {
		if (i === j) return;
		[this.data[i], this.data[j]] = [this.data[j], this.data[i]];
	}

	bubbleUp(index) {
		while (index) {
			const parentIndex = (index - 1) >> 1;
			if (this.compare(this.data[index], this.data[parentIndex]) < 0) {
				this.swap(index, parentIndex);
				index = parentIndex;
			} else {
				break;
			}
		}
	}

	bubbleDown(index) {
		let lastIndex = this.size() - 1;
		while (index < lastIndex) {
			const leftIndex = index * 2 + 1;
			const rightIndex = index * 2 + 2;
			let findIndex = index;
			if (
				leftIndex <= lastIndex &&
				this.compare(this.data[leftIndex], this.data[findIndex]) < 0
			) {
				findIndex = leftIndex;
			}
			if (
				rightIndex <= lastIndex &&
				this.compare(this.data[rightIndex], this.data[findIndex]) < 0
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

// @lc code=end
