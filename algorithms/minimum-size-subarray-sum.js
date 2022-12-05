/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 滑动窗口 
  // 时间复杂度: O(n)

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
      // 调整区间值
      sum -= nums[left];
      // 调整起始位置
      left++;
    }
    right++;
  }

  return minLen === Number.MAX_VALUE ? 0 : minLen;
};


/**
 * 暴力破解
 * 时间复杂度: O(n^2)
 */
function crash(target, nums) {
  let minCount = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= target) {
        let subLen = j - i + 1;
        minCount = minCount ? Math.min(subLen, minCount) : subLen;
        break;
      }
    }
  }

  return minCount;
}
