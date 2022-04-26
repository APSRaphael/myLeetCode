/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
	let ret = [];

	find(0);

	return ret.length;

	function find(row, temp = []) {
		if (row === n) {
			ret.push(
				temp.map((c) => {
					const arr = new Array(n).fill('.');
					arr[c] = 'Q';
					return arr.join('');
				})
			);
		}
		for (let col = 0; col < n; col++) {
			let cantSet = temp.some((ci, ri) => {
				return ci === col || ri - ci === row - col || ci + ri === col + row;
			});

			if (cantSet) continue;

			find(row + 1, [...temp, col]);
		}
	}
};

// @lc code=end
