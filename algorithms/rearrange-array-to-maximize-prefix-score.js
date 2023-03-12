/**
 * 6316. 重排数组以得到最大前缀分数
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  nums.sort((a, b) => b - a);

  let count = nums[0] > 0 ? 1 : 0;

  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
    if (nums[i] > 0) {
      count++;
    }
  }

  return count;
};
