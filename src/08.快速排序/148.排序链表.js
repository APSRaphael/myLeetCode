/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
// var sortList = function (head) {
// 	if (!head) return head;
// 	let l = head.val,
// 		r = head.val,
// 		mid;
// 	let p = head,
// 		q = null,
// 		h1 = null,
// 		h2 = null;
// 	while (p) {
// 		if (p.val < l) l = p.val;
// 		if (p.val > r) r = p.val;
// 		p = p.next;
// 	}

// 	// 如果最大跟最小都相等，说明链表不需要重新排序
// 	if (l == r) return head;
// 	mid = (l + r) / 2;
// 	p = head;

// 	while (p) {
// 		q = p.next;
// 		if (p.val <= mid) {
// 			p.next = h1;
// 			h1 = p;
// 		} else {
// 			p.next = h2;
// 			h2 = p;
// 		}
// 		p = q;
// 	}

// 	h1 = sortList(h1);
// 	h2 = sortList(h2);

// 	p = h1;

// 	while (p.next) p = p.next;
// 	p.next = h2;
// 	return h1;
// };

var sortList = function (head) {
	console.log('head :>> ', head); // hk-log
	if (!head) return head;

	let lVal = (rVal = head.val),
		mid;
	let p = head,
		q = null,
		r1 = null,
		r2 = null;
	while (p) {
		if (p.val < lVal) lVal = p.val;
		if (p.val > rVal) rVal = p.val;
		p = p.next;
	}
	if (lVal === rVal) return head;

	mid = (lVal + rVal) / 2;

	p = head;
	while (p) {
		q = p.next;
		console.log('p :>> ', p); // hk-log
		console.log('q :>> ', q); // hk-log
		if (p.val <= mid) {
			p.next = r1;
			r1 = p;
		} else {
			p.next = r2;
			r2 = p;
		}
		p = q;
	}
	r1 = sortList(r1);
	r2 = sortList(r2);

	p = r1;
	while (p.next) p = p.next;
	p.next = r2;
	return r1;
};

// 1、找到节点值的中间数
// 2、把链表通过中间数分成左右两段
// 3、分别排序
// 4、重新组合
