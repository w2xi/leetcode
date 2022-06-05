/**
 * 最大子数组和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let thisSum = 0,
    maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    thisSum += nums[i];

    if (maxSum < thisSum) {
      maxSum = thisSum;
    }
    if (thisSum < 0) {
      thisSum = 0;
    }
  }

  return maxSum;
};
