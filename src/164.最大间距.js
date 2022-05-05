/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 基数排序
var maximumGap = function (nums) {
	let cnt = new Array(65536).fill(0); // 记录下标和的数组
	let temp = new Array(nums.length);

	// 计数操作
	for (let i = 0; i < nums.length; i++) {
		cnt[nums[i] & 0xffff] += 1;
	}

	// console.log('cnt :>> ', JSON.stringify(cnt)); // hk-log
	// 求前缀和数组
	for (let i = 1; i < 65536; i++) {
		cnt[i] += cnt[i - 1];
	}
	// console.log('nums :>> ', JSON.stringify(nums)); // hk-log
	// console.log('cnt :>> ', JSON.stringify(cnt)); // hk-log

	// 把数字按照记录的下标放到临时数组
	// 从后往前排序
	for (let i = nums.length - 1; i >= 0; i--) {
		temp[--cnt[nums[i] & 0xffff]] = nums[i];
	}
	// console.log('temp :>> ', JSON.stringify(temp)); // hk-log
	// 重置
	cnt = new Array(65536).fill(0);
	// 下面是对 2 的 16-32 次方范围内的做一次基数排序
	for (let i = 0; i < temp.length; i++) {
		cnt[(temp[i] & 0xffff0000) >> 16] += 1;
	}

	for (let i = 1; i < 65536; i++) {
		cnt[i] += cnt[i - 1];
	}

	for (let i = nums.length - 1; i >= 0; i--) {
		nums[--cnt[(temp[i] & 0xffff0000) >> 16]] = temp[i];
	}


	let ans = 0;
	for (let i = 1; i < nums.length; i++) {
		ans = Math.max(ans, nums[i] - nums[i - 1]);
	}

	return ans;
};
// @lc code=end



http://url.lianhaikeji.com/5PVHmJTL
