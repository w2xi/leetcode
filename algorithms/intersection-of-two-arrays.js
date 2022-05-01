/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 方法一：映射（降低时间复杂度）
var intersection = function (nums1, nums2) {
  const result = [];
  const nums2Obj = {};
  // 保存出现过的值
  const occured = {};

  for (let i = 0; i < nums2.length; i++) {
    nums2Obj[nums2[i]] = true;
  }

  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i];

    if (nums2Obj[curr] && !occured[curr]) {
      occured[curr] = true;

      result.push(nums1[i]);
    }
  }

  return result;
};

// 方法二：排序 + 双指针
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let len1 = nums1.length;
  let len2 = nums2.length;
  let l1, l2, result = [];
  l1 = l2 = 0;

  // 上一次出现相等的数字
  let lastEqualNumber;

  while (l1 < len1 && l2 < len2) {
    if (nums1[l1] < nums2[l2]) {
      l1++;
    } else if (nums1[l1] > nums2[l2]) {
      l2++;
    } else {
      const curr = nums1[l1];

      if (curr !== lastEqualNumber) {
        result.push(curr);
      }

      lastEqualNumber = curr;
      l1++;
      l2++;
    }
  }

  return result;
};
