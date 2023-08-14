/*
 * @Author: raphael
 * @Date: 2021-03-11 16:33:24
 * @LastEditTime: 2021-03-17 15:12:19
 * @LastEditors: raphael
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	if (!head) return null;
	let ret = new ListNode(-1, head),
		pre = ret,
		cur = ret.next;
	while (n--) {
		cur = cur.next;
	}
	while (cur) {
		pre = pre.next;
		cur = cur.next;
	}
	pre.next = pre.next.next;
	return ret.next;
};
// @lc code=end
