/**
 * 删除有序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 双指针 (快慢指针)

  if (nums.length <= 1) {
    return nums.length;
  }

  let slowIndex = 1;

  for (let fastIndex = 1; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex - 1] !== nums[fastIndex]) {
      nums[slowIndex++] = nums[fastIndex];
    }
  }

  return slowIndex;
};
