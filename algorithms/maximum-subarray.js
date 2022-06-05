/**
 * 最大子数组和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 数据结构 (浙江大学)
  // 参考: https://www.icourse163.org/learn/ZJU-93001?tid=1462787444#/learn/content?type=detail&id=1239897398&cid=1261105609
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
