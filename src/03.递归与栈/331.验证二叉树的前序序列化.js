/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-03-30 22:48:44
 * @LastEditTime: 2021-04-15 00:58:44
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
	const n = preorder.length;
	const stack = [1];
	let i = 0;
	while (i < n) {
		if (!stack.length) return false;
		if (preorder[i] === ',') i++;
		else if (preorder[i] === '#') {
			stack[stack.length - 1]--;
			if (stack[stack.length - 1] === 0) {
				stack.pop();
			}
			i++;
		} else {
            // 如果是"9,#,92,#,#"中的 92 传进来，需要遍历到 2 才能停，所以需要循环。不然 92 会被分割成 9，2 来处理
			while (i < n && preorder[i] !== ',') {
				i++;
			}
			stack[stack.length - 1]--;
            if(stack[stack.length - 1] === 0) {
                stack.pop()
            }
            stack.push(2)
		}
	}
    return !stack.length
};
// @lc code=end
