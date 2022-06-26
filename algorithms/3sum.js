/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((num1, num2) => num1 - num2);
  let result = [];

  if (nums.length == 0 || nums[0] > 0 || nums.at(-1) < 0) return result;

  for (let i = 0; i < nums.length - 2; i++) {
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] > 0) {        // 偏大
        right--
      } else if (nums[i] + nums[left] + nums[right] < 0) { // 偏小
        left++;
      } else {
        result.push([nums[i], nums[left], nums[right]]);   // 等于 0
        left++;
        right--;
      }
      while (left > i + 1 && nums[left] === nums[left - 1]) left++;
      while (right < nums.length - 1 && nums[right] === nums[right + 1]) right--;
    }
  }
  return result;
};
