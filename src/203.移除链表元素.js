/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	if (head === null) return head;

	const ele = {
		next: head,
	};

	let cur = ele;
	while (cur.next) {
		if (cur.next.val === val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return ele.next;

	// let cur = head;
	// let prev = null;
	// let i = 0;
	// while (cur) {
	// 	if (i === 0) {
	// 		if (cur.val === val) {
	// 			head = head.next;
	// 			cur = head;
	// 		} else {
	// 			prev = cur;
	// 			cur = cur.next;
	// 			i++;
	// 		}
	// 	} else {
	// 		if (cur.val === val) {
	// 			prev.next = cur.next;
	// 		} else {
	// 			prev = cur;
	// 		}
	//         cur = cur.next;
	// 		i++;
	// 	}
	// }
	// return head
};
// @lc code=end
