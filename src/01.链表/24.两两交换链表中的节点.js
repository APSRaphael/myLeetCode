/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-14 16:22:56
 * @LastEditTime: 2021-03-18 11:10:12
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */

var swapPairs = function (head) {
	if (!head) return null;
	let ret = new ListNode(-1, head),
		temp = ret;
	while (temp.next && temp.next.next) {
		let pre = temp.next,
			cur = temp.next.next;
		temp.next = cur;
		pre.next = cur.next;
		cur.next = pre;
		temp = pre;
	}
	return ret.next;
};
// @lc code=end
