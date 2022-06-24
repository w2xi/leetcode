/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  // 思路: 分组 + 哈希表
  // A + B + C + D = 0
  // =>
  // A + B = -(C + D)

  const map = new Map();
  let count = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const val = nums1[i] + nums2[j];
      map.set(val, (map.get(val) || 0) + 1);
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const val = -(nums3[i] + nums4[j]);
      if (map.get(val)) {
        count += map.get(val);
      }
    }
  }

  return count;
};
