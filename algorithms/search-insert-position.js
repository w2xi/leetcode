/**
 * 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 二分查找
  // 时间复杂度 O(logn)
  // 空间复杂度 O(1)

  let left = 0;
  let right = nums.length - 1;
  let middle = 0;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  // 当查找结束时，没有找到 target, 此时 |left - right| = 1
  // 只需要将 target 插入到 left 和 right 之间即可
  return Math.floor((left + right) / 2) + 1;
};
