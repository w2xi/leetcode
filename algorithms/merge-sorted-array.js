/**
 * 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;

  nums1.length = m;

  while (i < nums1.length && j < n) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      nums1.splice(i, 0, nums2[j]);
      j++;
    }
  }
  nums1.push(...nums2.slice(j));
};
