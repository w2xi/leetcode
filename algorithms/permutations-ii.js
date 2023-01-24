/**
 * 47. 全排列 II
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const path = [];
  const used = Array(nums.length).fill(false); // 用于记录 path 里哪些元素已经使用过了

  const backtracking = (nums) => {
    if (path.length === nums.length) {
      result.push(path.slice());
      return;
    }
    // 使用 set 对同层使用过的元素去重
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (set.has(nums[i])) continue;
      set.add(nums[i]); // 记录该层使用过的元素
      path.push(nums[i]);
      used[i] = true;
      backtracking(nums);
      used[i] = false;
      path.pop();
    }
  };
  backtracking(nums);

  return result;
};
