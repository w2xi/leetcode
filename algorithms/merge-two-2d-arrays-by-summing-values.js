/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let left1 = 0;
  let right1 = nums1.length - 1;
  let left2 = 0;
  let right2 = nums2.length - 1;

  const result = [];

  // 思路和合并两个有序数组一样

  while (left1 <= right1 && left2 <= right2) {
    const curr1 = nums1[left1];
    const curr2 = nums2[left2];

    if (curr1[0] < curr2[0]) {
      result.push(curr1);
      left1++;
    } else if (curr1[0] > curr2[0]) {
      result.push(curr2);
      left2++;
    } else {
      result.push([curr1[0], curr1[1] + curr2[1]]);
      left1++;
      left2++;
    }
  }
  if (left1 > right1) {
    result.push(...nums2.slice(left2));
  } else {
    result.push(...nums1.slice(left1));
  }

  return result;
};
