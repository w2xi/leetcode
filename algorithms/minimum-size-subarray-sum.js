/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 滑动窗口

  // 滑动窗口起始位置
  let left = 0;
  let right = 0;
  // 滑动窗口数值之和
  let sum = 0;
  let minLen = Number.MAX_VALUE;

  while (right < nums.length) {
    sum += nums[right];
    // 调整窗口滑动
    while (sum >= target) {
      // 更新最小长度
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }

  return minLen === Number.MAX_VALUE ? 0 : minLen;
};
