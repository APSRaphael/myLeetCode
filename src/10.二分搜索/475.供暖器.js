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
		// 这里转换成查找大于等于 house的第一个位置，然后跟前一个位置进行比较，哪个更小，因为房子的位置一定在这两个供暖器之间，这样就可以通过二分查找来解决
		let j = binarySearch(heaters, house);
		// 保存找到的位置到房子的供暖距离，取绝对值
		let a = Math.abs(heaters[j] - house);
		// 如果 j 是 0，就取 a，不需要跟前一个比较了，所以 b 保存为 a+1
		let b = j ? house - heaters[j - 1] : a + 1;
		// 取所有供暖距离中最大的
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
	// 如果x大于最后的 tail,就会返回 tail，因为这个时候的 head 已经等于 tail 了
	return head;
};
// @lc code=end
