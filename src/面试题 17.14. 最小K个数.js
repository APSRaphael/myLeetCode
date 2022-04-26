/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
	const ans = [];
	if (k === 0) return ans;
	quickSelect(arr, 0, arr.length - 1, k);
	while (k) {
		ans.push(arr[--k]);
	}
	return ans;
};

var quickSelect = function (arr, l, r, k) {
	if (l >= r) return arr;
	let x = l,
		y = r,
		mid = getMid(arr[l], arr[(l + r) >> 1], arr[r]);
	do {
		while (arr[x] < mid) x++;
		while (arr[y] > mid) y--;
		if (x <= y) {
			swap(arr, x, y);
			x++, y--;
		}
	} while (x <= y);
	if (y - l === k - 1) return;
	if (y - l >= k) {
		quickSelect(arr, l, y, k);
	} else {
		quickSelect(arr, x, r, k - x + l);
	}
	return;
};

var getMid = function (a, b, c) {
	const arr = [a, b, c];
	if (arr[0] > arr[1]) swap(arr, 0, 1);
	if (arr[0] > arr[2]) swap(arr, 0, 2);
	if (arr[1] > arr[2]) swap(arr, 1, 2);
	return arr[1];
};

var swap = function (arr, x, y) {
	[arr[x], arr[y]] = [arr[y], arr[x]];
};

console.log('object :>> ', smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4));
