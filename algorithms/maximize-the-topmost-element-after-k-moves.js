/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function (nums, k) {
  // 分类讨论
  const n = nums.length;

  if (n === 1) {
    if (k % 2 === 1) {
      return -1;
    }
    return nums[0];
  }
  if (k <= 1) {
    return nums[k];
  }
  if (k > n) {
    return Math.max(...nums);
  }
  if (k === n) {
    return Math.max(...nums.slice(0, n - 1));
  }
  return Math.max(...nums.slice(0, k - 1), nums[k]);
};
