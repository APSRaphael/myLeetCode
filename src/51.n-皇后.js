/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
// var solveNQueens = function (n) {
// 	let ret = [];
// 	find(0);
// 	return ret;
// 	function find(row, temp = []) {
// 		if (row === n) {
// 			ret.push(
// 				temp.map((c) => {
// 					let arr = new Array(n).fill('.');
// 					arr[c] = 'Q';
// 					return arr.join('');
// 				})
// 			);
// 		}

// 		for (let col = 0; col < n; col++) {
// 			let cantSet = temp.some((ci, ri) => {
// 				return ci === col || ci + ri === row + col || ri - ci === row - col;
// 			});

// 			if (cantSet) continue;

// 			find(row + 1, [...temp, col]);
// 		}
// 	}
// };

var solveNQueens = function (n) {
	let ret = [];
	find(0);
	return ret;
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
			const cantSet = temp.some(
				(ci, ri) => ci === col || ci + ri === col + row || ci - ri === col - row
			);

			if (cantSet) continue;

			find(row + 1, [...temp, col]);
		}
	}
};

// @lc code=end
