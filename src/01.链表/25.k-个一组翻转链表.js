/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-10 16:33:51
 * @LastEditTime: 2021-03-15 23:16:50
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function (head, k) {
	if (!head) return null;
	let ret = new ListNode(-1, head),
		pre = ret;
	do {
		pre.next = reverse(pre.next, k);
		for (let i = 0; i < k && pre; i++) {
			pre = pre.next;
		}
		if (!pre) break;
	} while (true);

	return ret.next
};

var reverse = function (head, k) {
	let pre = head,
		cur = head,
		con = k;
	while (--k && pre) {
		pre = pre.next;
	}
	if (!pre) return head;
	pre = null;
	while (con--) {
		[cur.next, pre, cur] = [pre, cur, cur.next];
	}
	head.next = cur
	return pre;
};

// @lc code=end
