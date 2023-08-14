/*
 * @Author: raphael
 * @Date: 2021-04-28 16:05:07
 * @LastEditTime: 2021-04-28 19:22:27
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	let hair = new ListNode(-1, head);
	let left = hair,
		right = hair;
	while (right && right.next) {
		left = left.next;
		right = right.next.next;
	}
	right = left.next;
	left.next = null;
	left = head;
	right = reverse(right);
	while (left && right) {
		let lNext = left.next;
		let rNext = right.next;
		right.next = left.next;
		left.next = right;
		left = lNext;
		right = rNext;
	}

	return hair.next;
};

var reverse = function (head) {
	if (!head) return null;
	let pre = null,
		cur = head;
	while (cur) {
		[cur.next, pre, cur] = [pre, cur, cur.next];
	}
	return pre;
};
// @lc code=end
