/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  // 思路: 逆向思维
  // 每次操作既可以理解为使 n-1n−1 个元素增加 11，也可以理解使 11 个元素减少 11

  let sum = 0;
  const min = Math.min(...nums);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] - min;
  }

  return sum;
};
