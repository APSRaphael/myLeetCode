/*
 * @Author: raphael
 * @Date: 2021-04-26 09:50:46
 * @LastEditTime: 2021-06-01 11:55:30
 * @LastEditors: raphael
 * @Description:
 */
class MaxHeap {
	constructor(data) {
		this.data = data;
		this.init();
	}

	size() {
		return this.data.length;
	}
	init() {
		if (this.size() < 2) return;
		for (let i = 1; i < this.size(); i++) {
			this.itemUp(i);
		}
	}

	compator(a, b) {
		return a - b;
	}

	swap(i, j) {
		if (i === j) return;
		[this.data[i], this.data[j]] = [this.data[j], this.data[i]];
	}

	topItem() {
		if (!this.size()) return null;
		return this.data[0];
	}

	addItem(val) {
		this.data.push(val);
		this.itemUp(this.size() - 1);
	}

	deleteItem() {
		if (!this.size()) return null;
		if (this.size() < 3) return this.data.shift();
		const res = this.data[0];
		this.data[0] = this.data.pop();
		this.itemDown(0);
		return res;
	}

	itemUp(index) {
		while (index) {
			const parentIndex = (index - 1) >> 1;
			if (this.compator(this.data[index], this.data[parentIndex]) > 0) {
				this.swap(index, parentIndex);
				index = parentIndex;
			} else {
				break;
			}
		}
	}

	itemDown(index) {
		const lastIndex = this.size() - 1;
		while (index < lastIndex) {
			const leftIndex = index * 2 + 1;
			const rightIndex = index * 2 + 2;
			let findIndex = index;
			if (
				leftIndex <= lastIndex &&
				this.compator(this.data[leftIndex], this.data[findIndex]) > 0
			) {
				findIndex = leftIndex;
			}
			if (
				rightIndex <= lastIndex &&
				this.compator(this.data[rightIndex], this.data[findIndex]) > 0
			) {
				findIndex = rightIndex;
			}

			if (findIndex !== index) {
				this.swap(findIndex, index);
				index = findIndex;
			} else {
				break;
			}
		}
	}
}

const str =
	'1318073 678016441 874092905 2091308855 763075536 238193668 411460068 512019536 545368023 540157165 1008096286 1575787619 1494177729 2118806932 1214271570 725179549 1122983318 1894335790 1656555755 1754574577 2036958682 2127751547 1222560585 452217599 476559660 1571685957 1277021199 943723475 1993711230 1117298469 838359115 661437838 1410386394 439628372 1490302524 1412745907 1441257717 1750395106 512066289 1331145694 81044612 612161686 7303825 348818896 2116312409 91012802 643806550 1434072264 1243570767 1383028365 194735427 153243561 731636974 131259296 609282403 1007318325 1385498974 916071597 1105065436 1396203596 440027203 1751004200 11690912 1068146107 1515815076 705477971 711043510 1909260662 1243292760 1005532010 1427673827 1079222458 844969044 85364897 208747683 1581512630 1077673491 581284439 744456070 833441068 1755684142 1358064814 1539128582 1693549559 739180775 218387530 389663987 1404989806 2080970677 955493297 93130413 1874756275 1148645141 1548381904 447826182 1831941786 972550263 1154232924 972970317 1771629561 917266072 1853253938 536119878 1872890381 2000819388 325025743 1656748280 695374958 560912132 1944475841 399319641 478809412 728562175 2140203678 52128896 2104510743 1456391511 553516871 58892093 1956929431';
const stones = str.split(' ');

var lastStoneWeight = function (stones) {
	const maxHeap = new MaxHeap(stones);
	while (maxHeap.size() > 5) {
		const x = maxHeap.deleteItem();
		const y = maxHeap.deleteItem();
		if (x !== y) {
			maxHeap.addItem(x - y);
		}
	}
	const arr = [];
	while (maxHeap.size()) {
		arr.unshift(maxHeap.deleteItem());
	}

	return arr.join('');
};

const res = lastStoneWeight(stones);

console.log(`res`, res);
