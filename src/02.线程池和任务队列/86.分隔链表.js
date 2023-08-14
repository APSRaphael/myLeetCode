/*
 * @Author: raphael
 * @Date: 2021-03-17 13:05:30
 * @LastEditTime: 2021-03-17 14:32:54
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	if (!head) return null;
	let big = new ListNode(),
		small = new ListNode(),
		bigNode = big,
		smallNode = small;

	// for (let cur = head, next; cur; cur = next) {
	// 	next = cur.next;
	// 	cur.next = null;
	// 	if (cur.val < x) {
	// 		smallNode.next = cur;
	// 		smallNode = cur;
	// 	} else {
	// 		bigNode.next = cur;
	// 		bigNode = cur;
	// 	}
	// }
	let cur = head;
	while (cur) {
		let next = cur.next;
		cur.next = null;
		if (cur.val < x) {
			smallNode.next = cur;
			smallNode = cur;
		} else {
			bigNode.next = cur;
			bigNode = cur;
		}
		cur = next;
	}
	smallNode.next = big.next;
	return small.next;
};
// @lc code=end
