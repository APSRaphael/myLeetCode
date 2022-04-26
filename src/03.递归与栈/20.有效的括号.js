/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
// 	const stack = [];
// 	const obj = { '(': ')', '[': ']', '{': '}' };
// 	for (let i = 0; i < s.length; i++) {
// 		const item = s[i];
// 		if (item === '(' || item === '[' || item === '{') {
// 			stack.push(item);
// 		} else if (item === ')' || item === ']' || item === '}') {
// 			if (obj[stack.pop()] !== item) {
// 				return false;
// 			}
// 		}
// 	}
// 	return !stack.length;

// if (item in obj) {
// 	stack.push(item);
// } else {
// 	if (obj[stack.pop()] !== item) {
// 		return false;
// 	}
// }

// };

var isValid = function (s) {
	const stack = [];
	for (const ch of s) {
		switch (ch) {
			case '(':
			case '[':
			case '{':
				stack.push(ch);
				break;
			case ')':
				if (stack.pop() !== '(') return false;
				break;
			case ']':
				if (stack.pop() !== '[') return false;
				break;
			case '}':
				if (stack.pop() !== '{') return false;
				break;
		}
	}
	return !stack.length;
};

// var isValid = function (s) {
// 	const stack = [];
// 	let map = new Map([
// 		[')', '('],
// 		[']', '['],
// 		['}', '{'],
// 	]);
//     console.log(`map`, map)
// 	for (const ch of s) {
// 		console.log(`ch`, ch);
// 		if (map.has(ch)) {
// 			if (!stack.length || map.get(ch) !== stack[stack.length - 1])
// 				return false;
// 			stack.pop();
// 		} else {
//             stack.push(ch)
//         }
// 	}
// 	return !stack.length;
// };
// @lc code=end
