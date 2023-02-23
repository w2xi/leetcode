/**
 * 238. 除自身以外数组的乘积
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = Array(nums.length).fill(1);
  let left = 1; // 从左边累乘
  let right = 1; // 从右边累乘
  let n = nums.length;

  for (let i = 0; i < nums.length; i++) {
    result[i] *= left; // 乘以其左边的乘积
    left *= nums[i];

    result[n - 1 - i] *= right; // 乘以其右边的乘积 
    right *= nums[n - 1 - i];
  }

  return result;
};