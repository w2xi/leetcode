/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  // 双指针 (快慢指针)
  let slowIndex = 0;

  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
      if (val !== nums[fastIndex]) {
          nums[slowIndex++] = nums[fastIndex];
      }
  }

  return slowIndex;
};