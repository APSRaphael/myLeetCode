/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-09 20:16:35
 * @LastEditTime: 2021-08-30 16:41:01
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	if (!head) return false;
	let pre = head,
		cur = head;
	while (cur && cur.next) {
		pre = pre.next;
		cur = cur.next.next;
		if (pre === cur) {
			return true;
		}
	}
	return false;
};
// @lc code=end

var detectCycle = function (head) {
	if (!head) return false;
	let cache = new Set();

	while (head) {
		if (cache.has(head)) {
			return true;
		} else {
			cache.add(head);
		}
		head = head.next;
	}
	return false;
};
