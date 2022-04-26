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
// 	let n = 0,
// 		p = head;
// 	while (p) {
// 		p = p.next;
// 		n++;
// 	}
// 	return mergeSort(head, n);
// };

// var mergeSort = function (head, n) {
// 	if (!head || !head.next) return head;
// 	let lp = head,
// 		rp = head,
// 		p = null;
// 	let l = n >> 1,
// 		r = n - 1;
// 	for (let i = 1; i < l; i++) {
// 		rp = rp.next;
// 	}
// 	p = rp;
// 	rp = rp.next;
// 	p.next = null;

// 	lp = mergeSort(lp, l);
// 	rp = mergeSort(rp, r);

// 	let ret = new ListNode(-1);
// 	p = ret;
// 	while (lp || rp) {
// 		if (rp === null || (lp && lp.val < rp.val)) {
// 			p.next = lp;
// 			lp = lp.next;
// 		} else {
// 			p.next = rp;
// 			rp = rp.next;
// 		}
// 		p = p.next;
// 	}

// 	return ret.next;
// };

var sortList = function (head) {
	let p = head,
		n = 0;
	while (p) {
		p = p.next;
		n++;
	}
	return mergeSort(head, n);
};

var mergeSort = function (head, n) {
	if (!head || !head.next) return head;
	let lp = head,
		rp = head,
		p = null;
	let mid = n >> 1,
		r = n - 1;
	for (let i = 1; i < mid; i++) {
		rp = rp.next;
	}
	p = rp;
	rp = rp.next;
	p.next = null;
	lp = mergeSort(lp, mid);
	rp = mergeSort(rp, r - mid);

	let ret = new ListNode(-1);
	p = ret;
	while (lp || rp) {
		if (rp == null || (lp && lp.val < rp.val)) {
			p.next = lp;
			lp = lp.next;
		} else {
			p.next = rp;
			rp = rp.next;
		}
		p = p.next;
	}

	return ret.next;
};
// @lc code=end
