/**
 * 1005. K 次取反后最大化的数组和
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  let sum = 0;
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
  }
  if (k > 0 && k % 2 === 1) {
    nums[nums.length - 1] *= -1;
  }
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
};
