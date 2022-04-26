// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
	const arr = [1];
	let p3 = (p5 = p7 = 0);
	while (arr.length < k) {
		const min = Math.min(Math.min(arr[p3] * 3, arr[p5] * 5), arr[p7] * 7);
		arr.push(min);
		if (arr[p3] * 3 === min) p3++;
		if (arr[p5] * 5 === min) p5++;
		if (arr[p7] * 7 === min) p7++;
	}
	return arr[k - 1];
};

// @lc code=end
