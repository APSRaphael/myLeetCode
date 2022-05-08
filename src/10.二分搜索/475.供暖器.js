/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
	heaters.sort((a, b) => a - b);
	let ans = 0;
	for (let i = 0; i < houses.length; i++) {
		let house = houses[i];
		let j = binarySearch(heaters, house);
		let a = Math.abs(heaters[j] - house);
		let b = j ? house - heaters[j - 1] : a + 1;
		ans = Math.max(ans, Math.min(a, b));
	}

	return ans;
};

var binarySearch = function (nums, x) {
	let head = 0,
		tail = nums.length - 1,
		mid;
	while (head < tail) {
		mid = (head + tail) >> 1;
		if (nums[mid] >= x) tail = mid;
		else head = mid + 1;
	}
	return head;
};
// @lc code=end
