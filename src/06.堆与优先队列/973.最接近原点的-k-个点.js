/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-26 16:47:16
 * @LastEditTime: 2021-04-28 15:49:49
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
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
		return a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2);
	}

	swap(i, j) {
		if (i === j) return;
		[this.data[i], this.data[j]] = [this.data[j], this.data[i]];
	}

	deleteItem() {
		if (!this.size) return null;
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
			if (index !== findIndex) {
				this.swap(index, findIndex);
				index = findIndex;
			} else {
				break;
			}
		}
	}
}

var kClosest = function (points, k) {
    const maxHeap = new MaxHeap(points)
    while(maxHeap.size() > k){
        maxHeap.deleteItem()
    }
    return maxHeap.data
};
// @lc code=end
