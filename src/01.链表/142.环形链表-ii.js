/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-10 10:34:26
 * @LastEditTime: 2021-08-30 16:42:01
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
	if (!head) return null;
	let pre = head,
		cur = head;
	while (cur && cur.next) {
		pre = pre.next;
		cur = cur.next.next;
		if (pre === cur) {
			pre = head;
			while (pre !== cur) {
				pre = pre.next;
				cur = cur.next;
			}
			return cur;
		}
	}
	return null;
};

// @lc code=end

// var detectCycle = function (head) {
// 	if (!head) return null;
// 	let cache = new Set();

// 	while (head) {
// 		if (cache.has(head)) {
// 			return head;
// 		} else {
// 			cache.add(head);
// 		}
// 		head = head.next;
// 	}
// 	return null;
// };
