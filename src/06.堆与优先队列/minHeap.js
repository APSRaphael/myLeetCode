/*
 * @Author: raphael
 * @Date: 2021-04-22 16:30:40
 * @LastEditTime: 2022-04-22 12:54:19
 * @LastEditors: raphael
 * @Description:
 */

class MinHeap {
	constructor(data) {
		this.data = data;
		this.compare = (a, b) => a - b;
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
		if (!this.size()) return null;
		const res = this.data[0];
		this.data[0] = this.data.pop();
		if (this.size()) {
			this.bubbleDown(0);
		}
		return res;
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

const arr = [2, 3, 5, 7, 8, 9, 1, 14, 76, 435, 57, 45];

const minHeap = new MinHeap(arr);
minHeap.offer(54);
minHeap.offer(65);
minHeap.offer(12);
console.log(`heap`, minHeap.data);
