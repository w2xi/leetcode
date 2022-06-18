// 方法一 哈希表
// 空间复杂度: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const o = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    // 如果已经出现过
    if (o[curr]) {
      delete o[curr];
    } else {
      o[curr] = 1;
    }
  }

  const keys = Object.keys(o);

  return keys[0];
};

// 方法二：位运算
// 空间复杂度: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
      result ^= nums[i]
  }

  return result
};