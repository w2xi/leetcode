/**
 * 46. 全排列
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const path = [];
  const used = Array(nums.length).fill(false); // 用于记录 path 里哪些元素已经使用过了

  const backtracking = (nums) => {
    if (path.length === nums.length) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // path 已经使用的元素 直接跳过
      path.push(nums[i]);
      used[i] = true; // 标记已使用
      backtracking(nums);
      used[i] = false;
      path.pop();
    }
  };
  backtracking(nums);

  return result;
};
