/**
 * 78. 子集
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const path = [];

  const backtracking = (nums, startIndex = 0) => {
    result.push(path.slice());
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  };
  backtracking(nums);

  return result;
};
