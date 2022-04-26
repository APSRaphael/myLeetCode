function quickSort(arr, l, r) {
	if (l >= r) return;
	let x = l,
		y = r,
		base = arr[l];
	console.log('arr :>> ', arr); // hk-log
	while (x < y) {
		while (x < y && arr[y] >= base) y--;
		if (x < y) arr[x++] = arr[y];
		while (x < y && arr[x] < base) x++;
		if (x < y) arr[y--] = arr[x];
	}
	arr[x] = base;
	quickSort(arr, l, x - 1);
	quickSort(arr, x + 1, r);
	return;
}

const arr = [7, 4, 3, 6, 8, 2, 1, 5];
quickSort(arr, 0, arr.length - 1);
