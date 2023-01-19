/**
 * 169. 多数元素
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 哈希表
  // 时间复杂度: O(n)
  // 空间复杂度: O(n)

  const targetNum = nums.length >> 1;
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    map[curr] = (map[curr] || 0) + 1;
    if (map[curr] > targetNum) {
      return curr;
    }
  }
};
