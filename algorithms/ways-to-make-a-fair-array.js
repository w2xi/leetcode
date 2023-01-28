/**
 * 1664. 生成平衡数组的方案数
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  /**
   * [2, 1, 6, 4]
   * even: 8; odd: 5
   * | index | even  | odd |   8  |  5  | 
   * |   0   | 1+4=5 |  6  |   6  |  5  |
   * |   1   | 2+4+6 |  6  |   6  |  4  |
   * |   2   | 2+4=6 |  1  |   0  |  4  |
   * |   3   | 2+6=8 |  1  |   0  |  1  |
   * 总体思路: 前缀后缀`奇偶`和
   */
  let odd1 = 0, even1 = 0; // 后缀和
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even1 += nums[i];
    } else {
      odd1 += nums[i];
    }
  }
  let odd2 = 0, even2 = 0; // 前缀和
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even1 -= nums[i];
    } else {
      odd1 -= nums[i];
    }
    if (odd1 + even2 === even1 + odd2) {
      count++;
    }
    if (i % 2 === 0) {
      even2 += nums[i];
    } else {
      odd2 += nums[i];
    }
  }

  return count;
};
