/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
	var getCharAt = function (char) {
		return char.charCodeAt(0) - "a".charCodeAt(0);
	};

	var n = words.length,
		lens = [],
		masks = [];

	for (let i = 0; i < n; i++) {
		var len = words[i].length;
		lens.push(len);
		let mask = 0;
		for (let j = 0; j < len; j++) {
			mask |= 1 << getCharAt(words[i][j]);
		}
		masks.push(mask);
	}
	let ans = 0;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (masks[i] & masks[j]) continue;
			ans = Math.max(ans, lens[i] * lens[j]);
		}
	}

	return ans;
};
// @lc code=end

var maxProduct = function (words) {
	const getChar = (char) => {
		return char.charCodeAt(0) - "a".charCodeAt(0);
	};

	const n = words.length,
		lens = [],
		masks = [];

	for (let i = 0; i < n; i++) {
		const len = words[i].length;
		lens.push(len);
		let mask = 0;
		for (let j = 0; j < len; j++) {
			mask |= 1 << getChar(words[i][j]);
		}
		masks.push(mask);
	}
	let ans = 0;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (masks[i] & masks[j]) continue;
			ans = Math.max(ans, lens[i] * lens[j]);
		}
	}

    return ans
};
