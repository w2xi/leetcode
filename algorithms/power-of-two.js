/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 1. 位运算
  // ref: https://leetcode.cn/problems/power-of-two/solution/power-of-two-er-jin-zhi-ji-jian-by-jyd/

  return n > 0 && (n & (n - 1)) === 0;

  // 2. 递归
  // if (n === 1) {
  //   return true;
  // }
  // if (n <= 0 || n % 2 !== 0) {
  //   return false;
  // }
  // return isPowerOfTwo(n / 2);

  // 3. 迭代
  // let result = 1;
  // while (result <= n) {
  //   if (result === n) {
  //     return true;
  //   }
  //   result *= 2;
  // }
  // return false;
};
