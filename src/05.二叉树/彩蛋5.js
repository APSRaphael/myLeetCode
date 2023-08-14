/*
 * @Author: raphael
 * @Date: 2021-04-17 21:27:04
 * @LastEditTime: 2021-04-17 21:44:26
 * @LastEditors: raphael
 * @Description:
 */

/**
 * 将数值 1-10000，奇数入栈偶数入队列，然后分别出栈和出队列，将出栈和出队列的数字两两相乘，再将乘积累加求和，最后将和除以 17向下取整。
 */

var getSum = function () {
	const stack = [];
	const queue = [];
	for (let i = 1; i < 10001; i++) {
		if (i % 2 !== 0) {
			stack.unshift(i);
		} else {
			queue.push(i);
		}
	}
	const sumArray = [];
	for (let i = 0; i < stack.length; i++) {
		sumArray.push(stack[i] * queue[i]);
	}
	const sum = sumArray.reduce((a, b) => {
		return a + b;
	}, 0);
	return sum
};

var getResult = () => {
	return Math.floor(getSum() / 17);
};

console.log(`object`, getResult())
