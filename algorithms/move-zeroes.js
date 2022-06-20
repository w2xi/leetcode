/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }

  // 双指针

  // let slow = 0;
  // let fast = 0;

  // while (fast < nums.length) {
  //   if (nums[fast] !== 0) {
  //     swap(nums, slow, fast);
  //     slow++;
  //   }
  //   fast++;
  // }
};
