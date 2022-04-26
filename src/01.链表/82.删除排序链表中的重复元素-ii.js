/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-11 16:42:31
 * @LastEditTime: 2021-03-14 17:57:20
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
	if (!head) return null;
	let ret = new ListNode(-1, head),
		pre = ret,
		cur = null;
	while (pre.next) {
		if (pre.next.next && pre.next.val === pre.next.next.val) {
			cur = pre.next.next.next;
			while (cur && cur.val === pre.next.val) {
				cur = cur.next;
			}
			pre.next = cur;
		} else {
			pre = pre.next;
		}
	}
	return ret.next;
};
// @lc code=end
