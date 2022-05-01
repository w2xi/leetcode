/** 
 * 映射
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  // 保存 nums2 中每个数字出现的次数
  const o = {}
  const result = []

  for (let i = 0; i < nums2.length; i++) {
      const curr = nums2[i]
      o[curr] || (o[curr] = 0)
      o[curr]++
  }

  for (let i = 0; i < nums1.length; i++) {
      const curr = nums1[i]

      if (o[curr]) {
          result.push(curr)
          o[curr]--
      }
  }

  return result
};

// 双指针
// ...