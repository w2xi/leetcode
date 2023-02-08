/**
 * 45. 跳跃游戏 II
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  let cover = nums[0];
  let step = 0;
  let reach = 0;

  for (let i = 0; i < nums.length; i++) {
    cover = Math.max(i + nums[i], cover);
    if (cover >= nums.length - 1) {
      return step + 1;
    }
    if (i === reach) {
      step++;
      reach = cover;
    }
  }
  return step;
};
