// 方法一：映射

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