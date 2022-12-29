/*
 * @lc app=leetcode.cn id=2032 lang=javascript
 *
 * [2032] 至少在两个数组中出现的值
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
  const result = [];
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);

  for (let i = 0; i < nums2.length; i++) {
    if (s1.has(nums2[i])) {
      result.push(nums2[i]);
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    if (s1.has(nums3[i])) {
      result.push(nums3[i]);
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    if (s2.has(nums3[i])) {
      result.push(nums3[i]);
    }
  }
  return [...new Set(result)];
};
// @lc code=end

