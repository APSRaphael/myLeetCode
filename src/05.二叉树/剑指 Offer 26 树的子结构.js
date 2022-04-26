/*
 * @Author: wb-hk750148@alibaba-inc.com
 * @Date: 2021-04-15 23:24:08
 * @LastEditTime: 2021-04-16 00:27:00
 * @LastEditors: wb-hk750148@alibaba-inc.com
 * @Description:  
 */


// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

 var isMatch = (A, B) => {
    if (B == null) return true;
    if (A === null) return false;
    if (A.val !== B.val) return false;
    return isMatch(A.left, B.left) && isMatch(A.right, B.right)

}
var isSubStructure = function (A, B) {
    if (B == null) return false;
    if (A === null) return false;
    if (A.val === B.val && isMatch(A, B)) return true
    return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};
// @lc code=end
