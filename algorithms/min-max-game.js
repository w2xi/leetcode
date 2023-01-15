/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  let temp;
  while (nums.length !== 1) {
    temp = [];
    for (let i = 0; i < nums.length / 2; i++) {
      if (i % 2 === 0) {
        temp[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
      } else {
        temp[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
      }
    }
    nums = temp;
  }
  return nums[0];
};
