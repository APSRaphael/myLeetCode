/*
 * @Author: raphael
 * @Date: 2021-03-18 15:15:49
 * @LastEditTime: 2021-04-09 21:02:26
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
	this.queue = Array(k + 1);
	this.front = 0;
	this.rear = 0;
	this.max = k;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
	if (this.isFull()) return false;
	this.front = (this.front + this.max) % (this.max + 1);
	this.queue[this.front] = value;
	return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
	if (this.isFull()) return false;
	this.queue[this.rear] = value;
	this.rear = (this.rear + 1) % (this.max + 1);
	return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
	if (this.isEmpty()) return false;
	this.front = (this.front + 1) % (this.max + 1);
	return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
	if (this.isEmpty()) return false;
	this.rear = (this.rear + this.max) % (this.max + 1);
	return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
	if (this.isEmpty()) return -1;
	return this.queue[this.front];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
	if (this.isEmpty()) return -1;
	return this.queue[(this.rear + this.max) % (this.max + 1)];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
	return (this.rear - this.front + this.max + 1) % (this.max + 1) === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
	return (this.rear - this.front + this.max + 1) % (this.max + 1) === this.max;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end
