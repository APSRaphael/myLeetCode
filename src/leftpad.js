function leftpad(str, length, ch) {
	let len = (length = str.length);
	let total = '';
	while (len) {
		if (len & 1) {
			total += ch;
		}
		if (len == 1) {
			return total + str;
		}
		ch += ch;
		len = len >> 1 // 右移一位   101(5) => 10(2)
	}
}

console.log('leftpad(hello,10, 0) :>> ', leftpad('helloworld', 15, '0')); // hk-log
