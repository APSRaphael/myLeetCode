/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-18 15:43:53
 * @LastEditTime: 2021-05-10 11:12:46
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// @lc code=start

var FrontMiddleBackQueue = function () {
	this.leftArray = [];
	this.rightArray = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
	this.leftArray.unshift(val);
	if (this.leftArray.length > this.rightArray.length) {
		this.rightArray.unshift(this.leftArray.pop());
	}
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
	if (this.leftArray.length === this.rightArray.length) {
		this.rightArray.unshift(val);
	} else {
		this.leftArray.push(val);
	}
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
	this.rightArray.push(val);
	if (this.rightArray.length - 1 > this.leftArray.length) {
		this.leftArray.push(this.rightArray.shift());
	}
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
	if (!this.rightArray.length) return -1;
	if (!this.leftArray.length) return this.rightArray.pop();

	const ret = this.leftArray.shift();
	if (this.leftArray.length + 1 < this.rightArray.length) {
		this.leftArray.push(this.rightArray.shift());
	}
	return ret;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
	if (!this.rightArray.length) return -1;
	if (!this.leftArray.length) return this.rightArray.pop();
	if (this.leftArray.length === this.rightArray.length)
		return this.leftArray.pop();

	return this.rightArray.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
	if (!this.rightArray.length) return -1;
	if (!this.leftArray.length) return this.rightArray.pop();
	const ret = this.rightArray.pop();
	if (this.rightArray.length < this.leftArray.length) {
		this.rightArray.unshift(this.leftArray.pop());
	}
	return ret;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end
