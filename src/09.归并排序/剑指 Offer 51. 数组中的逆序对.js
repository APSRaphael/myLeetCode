/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
	return countResult(nums, 0, nums.length - 1);
};

var countResult = function (arr, l, r) {
	if (l >= r) return 0;
	let mid = (l + r) >> 1,
		ans = 0;
	ans += countResult(arr, l, mid);
	ans += countResult(arr, mid + 1, r);

	let k = 0,
		p1 = l,
		p2 = mid + 1;
	const temp = [];
	while (p1 <= mid || p2 <= r) {
		if (p2 > r || (p1 <= mid && arr[p1] <= arr[p2])) {
			temp[k++] = arr[p1++];
		} else {
			temp[k++] = arr[p2++];
			ans += mid - p1 + 1;
		}
	}
	for (let i = l; i <= r; i++) {
		arr[i] = temp[i - l];
	}
	return ans;
};

var countResult = function (arr, l, r) {
	if (l >= r) return arr;
	let mid = (l + r) >> 1;
	let ans = 0;
	ans += countResult(arr, l, mid);
	ans += countResult(arr, mid + 1, r);

	const tempArr = [];
	let k = l,
		x = l,
		y = r;
	while (x <= mid || y <= r) {
		if (y > r || (x <= mid && arr[x] < arr[y])) {
			tempArr[k++] = arr[x++];
		} else {
			tempArr[k++] = arr[y++];
		}
	}
	for (let i = l; i <= r; i++) {
		arr[i] = tempArr[i];
	}
	return ans
};
