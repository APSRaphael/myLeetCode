/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-10 15:06:41
 * @LastEditTime: 2021-08-30 14:17:34
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// var reverseList = function (head) {
	if (!head) return null;
	let pre = null,
		cur = head;
	while (cur) {
		[cur.next, pre, cur] = [pre, cur, cur.next];
	}
	return pre;
};

// @lc code=end
