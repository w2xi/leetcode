/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  // 桶排序思想
  // ref: https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/solution/li-yong-tong-pai-xu-de-si-lu-ni-huan-ke-e3t4w/

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
      swap(nums, i, nums[i] - 1);
    }
  }

  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] !== i) {
      result.push(nums[i - 1]);
    }
  }

  return result;
};

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}