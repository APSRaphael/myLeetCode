var mergeArr = function (nums) {
	const arr = mergeSort(nums[0], nums[1], nums[2], nums[3]);
	for (i = 0; i < nums[1] + nums[3]; i++) {
		nums[0][i] = arr[i];
	}
	return nums[0];
};

var mergeSort = function (arr1, m, arr2, n) {
	let p1 = 0,
		p2 = 0,
		k = 0;
	const temp = [];
	while (p1 <= m - 1 || p2 <= n - 1) {
		if (p2 > n - 1 || (p1 <= m - 1 && arr1[p1] <= arr2[p2])) {
			temp[k++] = arr1[p1++];
		} else {
			temp[k++] = arr2[p2++];
		}
	}
	return temp;
};

mergeArr([[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3]);
