/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-24 10:38:04
 * @LastEditTime: 2022-04-22 11:20:05
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */

// class MaxHeap {
// 	constructor(data) {
// 		this.data = data;
// 		this.init();
// 	}

// 	size() {
// 		return this.data.length;
// 	}
// 	init() {
// 		if (this.size() < 2) return;

// 		for (let i = 1; i < this.size(); i++) {
// 			this.itemUp(i);
// 		}
// 	}

// 	compare(a, b) {
// 		return a - b;
// 	}

// 	swap(i, j) {
// 		if (i === j) return;
// 		[this.data[i], this.data[j]] = [this.data[j], this.data[i]];
// 	}

// 	topItem() {
// 		if (!this.size()) return null;
// 		return this.data[0];
// 	}

// 	addItem(val) {
// 		this.data.push(val);
// 		this.itemUp(this.size() - 1);
// 	}

// 	deleteItem() {
// 		if (!this.size()) return null;
// 		if (this.size() < 3) return this.data.shift();
// 		const res = this.data[0];
// 		this.data[0] = this.data.pop();
// 		this.itemDown(0);
// 		return res;
// 	}

// 	itemUp(index) {
// 		while (index) {
// 			const parentIndex = (index - 1) >> 1;
// 			if (this.compare(this.data[index], this.data[parentIndex]) > 0) {
// 				this.swap(index, parentIndex);
// 				index = parentIndex;
// 			} else {
// 				break;
// 			}
// 		}
// 	}

// 	itemDown(index) {
// 		const lastIndex = this.size() - 1;
// 		while (index < lastIndex) {
// 			const leftIndex = index * 2 + 1;
// 			const rightIndex = index * 2 + 2;
// 			let findIndex = index;
// 			if (
// 				leftIndex <= lastIndex &&
// 				this.compare(this.data[leftIndex], this.data[findIndex]) > 0
// 			) {
// 				findIndex = leftIndex;
// 			}

// 			if (
// 				rightIndex <= lastIndex &&
// 				this.compare(this.data[rightIndex], this.data[findIndex]) > 0
// 			) {
// 				findIndex = rightIndex;
// 			}
// 			if (findIndex !== index) {
// 				this.swap(findIndex, index);
// 				index = findIndex;
// 			} else {
// 				break;
// 			}
// 		}
// 	}
// }
const arr = [1, 4, 56, 78, 445, 65, 456, 677, 568];

class MaxHeap {
	constructor(data) {
		this.data = data;
		this.init();
	}

	init() {
		if (this.size() < 2) return;
		for (let i = 0; i < this.size(); i++) {
			this.itemUp(i);
		}
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
		if (this.size() < 1) return null;
		if (this.size() < 3) return this.data.shift();
		const top = this.data[0];
		this.data[0] = this.data.pop();
		this.itemDown(0);
		return top;
	}

	size() {
		return this.data.length;
	}

	compare(a, b) {
		return this.data[a] - this.data[b];
	}

	swap(i, j) {
		if (i === j) return;
		[this.data[i], this.data[j]] = [this.data[j], this.data[i]];
	}

	itemUp(index) {
		while (index) {
			const parentIndex = (index - 1) >> 1;
			if (this.compare(parentIndex, index) < 0) {
				this.swap(parentIndex, index);
				index = parentIndex;
			} else {
				break;
			}
		}
	}

	itemDown(index) {
		const lastIndex = this.size() - 1;
		while (index < lastIndex) {
			const leftIndex = 2 * index + 1;
			const rightIndex = 2 * index + 2;
			let findIndex = index;
			if (leftIndex <= lastIndex && this.compare(leftIndex, findIndex) > 0) {
				findIndex = leftIndex;
			}
			if (rightIndex <= lastIndex && this.compare(rightIndex, findIndex) > 0) {
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

const maxHeap = new MaxHeap(arr);
maxHeap.addItem(54);
maxHeap.addItem(65);
maxHeap.addItem(12);
console.log(`heap`, maxHeap.data);
