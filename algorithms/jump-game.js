/**
 * 55. 跳跃游戏
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length <= 1) return true;
  // 覆盖范围
  let cover = 0;

  for (let i = 0; i <= cover; i++) {
    // 更新最大覆盖范围
    cover = Math.max(i + nums[i], cover);
    if (cover >= nums.length - 1) {
      // 说明可以到达终点
      return true;
    }
  }

  return false;
};
