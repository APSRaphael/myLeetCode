/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
	const arr = [],
		ret = [];
	getResult(nums, 0, arr, ret);

    return  ret
};

var getResult = function(nums,k,buff, ret){
    if(buff.length > 1) return ret.push(buff)
    buff.push(0)

    return 
}
// @lc code=end
