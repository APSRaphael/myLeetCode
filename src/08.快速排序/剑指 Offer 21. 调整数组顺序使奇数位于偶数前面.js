var swap = function (arr, x, y) {
	[arr[x], arr[y]] = [arr[y], arr[x]];
};

var exchange = function (nums) {
	const len = nums.length;
	if (!len) return nums;
	let l = 0,
		r = len - 1;
	do {
		while (l < len && nums[l] % 2) l++;
		while (r >= 0 && nums[r] % 2 !== 1) r--;
		if (l <= r) {
			swap(nums, l, r);
			l++, r--;
		}
	} while (l <= r);
	return nums;
};

