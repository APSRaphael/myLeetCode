/*
 * @Author: raphael
 * @Date: 2021-03-10 22:45:24
 * @LastEditTime: 2023-08-14 10:14:07
 * @LastEditors: 益智
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (!head) return null;
	let ret = new ListNode(-1, head),
		pre = ret,
		n = 0;
	while (pre.next) {
		pre = pre.next;
		n += 1;
	}
	pre.next = head;
	let m = n - (k % n);
	while (m--) {
		pre = pre.next;
	}
	head = pre.next;
	pre.next = null;
	return head;
};
// @lc code=end
