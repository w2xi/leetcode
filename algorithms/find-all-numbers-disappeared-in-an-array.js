/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // 思路:
  // 使用数组来标识每个数是否出现， 1 表示出现； 0 表示没有出现

  const arr = Array(nums.length + 1).fill(0);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] = 1;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (arr[i] === 0) {
      result.push(i);
    }
  }

  return result;
};
