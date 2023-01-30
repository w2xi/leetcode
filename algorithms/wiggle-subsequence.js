/**
 * 376. 摆动序列
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  let result = 1;
  let preDiff = 0;
  let currDiff = 0;

  for (let i = 1; i < nums.length; i++) {
    currDiff = nums[i] - nums[i - 1];
    if (
      (currDiff > 0 && preDiff <= 0) ||
      (currDiff < 0 && preDiff >= 0)
    ) {
      result++;
      preDiff = currDiff;
    }
  }
  return result;
};