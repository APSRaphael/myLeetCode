/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-28 19:56:44
 * @LastEditTime: 2021-05-07 09:53:58
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var MyLinkedList = function () {
	this.head = null;
	this.rear = null;
	this.len = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
	if (index < 0 || index > this.len - 1) {
		return -1;
	}
	var node = this.head;
	while (index-- > 0) {
		if (node.next === null) {
			return -1;
		}
		node = node.next;
	}
	return node.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
	var node = new ListNode(val);
	if (this.head === null) {
		this.rear = node;
	} else {
		node.next = this.head;
	}
	this.head = node;
	this.len++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
	var node = new ListNode(val);
	if (this.head === null) {
		this.head = node;
	} else {
		this.rear.next = node;
	}
	this.rear = node;
	this.len++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
	if (index <= 0) return this.addAtHead(val);
	if (index > this.len) return;
	if (index === this.len) return this.addAtTail(val);
	var node = this.head;
	while (index > 1) {
		node = node.next;
		index--;
	}
	var newNode = new ListNode(val);
	newNode.next = node.next;
	node.next = newNode;
	this.len++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
	if (index < 0 || index > this.len - 1 || this.len === 0) return;
	if (index === 0) {
		this.head = this.head.next;
		this.len--;
		return;
	}
	let node = this.head;
	let myindex = index;
	while (index > 1) {
		node = node.next;
		index--;
	}
	if (myindex === this.len - 1) {
		this.rear = node;
	}
	node.next = node.next.next;
	this.len--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
