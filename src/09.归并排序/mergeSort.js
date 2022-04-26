function mergeSort(arr, l, r) {
	console.log('l :>> ', l, r); // hk-log
	if (l >= r) return;
	let mid = (l + r) >> 1;

	mergeSort(arr, l, mid);
	mergeSort(arr, mid + 1, r);

	const tempArr = [];
	let k = 0,
		p1 = l,
		p2 = mid + 1;
	while (p1 <= mid || p2 <= r) {
		if (p2 > r || (p1 <= mid && arr[p1] <= arr[p2])) {
			tempArr[k++] = arr[p1++];
		} else {
			tempArr[k++] = arr[p2++];
		}
	}

	for (let i = l; i <= r; i++) {
		arr[i] = tempArr[i - l];
	}

	// arr.splice(l, tempArr.length, ...tempArr)

	return;
}

function mergeSort1(arr, l, r) {
	if (l >= r) return;
	let mid = (l + r) >> 1;
	mergeSort1(arr, l, mid);
	mergeSort1(arr, mid + 1, r);
	let k = l,
		p1 = l,
		p2 = mid + 1;
	const tempArr = [];
	while (p1 <= mid || p2 <= r) {
		if (p2 > r || (p1 <= mid && arr[p1] <= arr[p2])) {
			tempArr[k++] = arr[p1++];
		} else {
			tempArr[k++] = arr[p2++];
		}
	}

	for (let i = l; i <= r; i++) {
		arr[i] = tempArr[i];
	}
	console.log('arr444 :>> ', arr); // hk-log
}

const arr = [34, 2, 4, 5, 6, 7];

// 1、把数组分成左右两份
// 2、分别排序
// 3、合并

function mergeSort2(arr, l, r) {
	if (l >= r) return;
	let mid = (l + r) >> 1;

	mergeSort2(arr, l, mid);
	mergeSort2(arr, mid + 1, r);

	const tempArr = [];
	let k = 0;
	let p1 = l;
	let p2 = mid + 1;

	while (p1 <= mid || p2 <= r) {
		if (p2 > r || (p1 <= mid && arr[p1] <= arr[p2])) {
			tempArr[k++] = arr[p1++];
		} else {
			tempArr[k++] = arr[p2++];
		}
	}
	for (let i = l; i <= r; i++) {
		arr[i] = tempArr[i - l];
	}
}

mergeSort2(arr, 0, arr.length - 1);

console.log('arr :>> ', arr); // hk-log
