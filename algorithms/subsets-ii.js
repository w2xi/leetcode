/**
 * 90. 子集 II
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b); // 排序

  const result = [];
  const path = [];

  const backtracking = (nums, startIndex = 0) => {
    result.push(path.slice());
    for (let i = startIndex; i < nums.length; i++) {
      // 对同一树层使用过的元素进行跳过
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  };
  backtracking(nums);

  return result;
};
