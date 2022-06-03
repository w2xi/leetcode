/**
 * 删除有序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 双指针
  if (nums.length === 0) {
    return 0;
  }
  let slow = 1;
  let fast = 1;
  
  while (fast < nums.length) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  return slow;
};
