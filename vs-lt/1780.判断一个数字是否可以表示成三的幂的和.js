/*
 * @lc app=leetcode.cn id=1780 lang=javascript
 *
 * [1780] 判断一个数字是否可以表示成三的幂的和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    while (n) {
      if (n % 3 === 2) return false;
      n = parseInt(n / 3);
    }

    return true;
};
// @lc code=end

