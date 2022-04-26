/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-27 18:17:03
 * @LastEditTime: 2021-04-28 16:05:01
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	const stack1 = [],
		stack2 = [];
	let hair = new ListNode(-1);
	while (l1) {
		stack1.push(l1.val);
		l1 = l1.next;
	}
	while (l2) {
		stack2.push(l2.val);
		l2 = l2.next;
	}

	let ten = 0;
	while (stack1.length || stack2.length || ten) {
		let num1 = stack1[stack1.length - 1] === undefined ? 0 : stack1.pop(),
			num2 = stack2[stack2.length - 1] === undefined ? 0 : stack2.pop();
		let val = num1 + num2 + ten;
		ten = (val / 10) | 0;
		let temp = new ListNode(val % 10, hair.next);
		hair.next = temp;
	}
	return hair.next;
};
// @lc code=end
