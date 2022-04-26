/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// var exist = function (board, word) {
// 	if (!board.length) return false;
// 	if (!word.length) return true;
// 	const row = board.length;
// 	const col = board[0].length;
// 	for (let i = 0; i < row; i++) {
// 		for (let j = 0; j < col; j++) {
// 			let ret = find(i, j, 0);
// 			if (ret) return true;
// 		}
// 	}
// 	return false;

// 	function find(i, j, cur) {
// 		if (i >= row || i < 0) return false;
// 		if (j >= col || j < 0) return false;

// 		const letter = board[i][j];

// 		if (letter !== word[cur]) return false;

// 		if (cur === word.length - 1) return true;

// 		board[i][j] = null;

// 		const ret =
// 			find(i + 1, j, cur + 1) ||
// 			find(i - 1, j, cur + 1) ||
// 			find(i, j + 1, cur + 1) ||
// 			find(i, j - 1, cur + 1);

// 		board[i][j] = letter;

// 		return ret;
// 	}
// };

var exist = function (board, word) {
	if (!board.length) return false;
	if (!word.length) return true;

	const row = board.length;
	const col = board[0].length;

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			let ret = find(i, j, 0);
			if (ret) return true;
		}
	}
	return false;

	function find(i, j, cur) {
		if (i >= row || i < 0) return false;
		if (j >= col || j < 0) return false;

		const letter = board[i][j];

		if (letter !== word[cur]) return false;
		if (cur === word.length - 1) return true;
		board[i][j] = null;
		const ret =
			find(i + 1, j, cur + 1) ||
			find(i - 1, j, cur + 1) ||
			find(i, j + 1, cur + 1) ||
			find(i, j - 1, cur + 1);
		board[i][j] = letter;
		return ret;
	}
};

// @lc code=end
