/**
 * 491. 递增子序列
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  if (nums.length <= 1) return [];

  const result = [];
  const path = [];

  const backtracking = (nums, startIndex = 0) => {
    if (path.length >= 2) {
      result.push(path.slice());
    }
    /// 同一父节点下的同层上使用过的元素就不能再使用了
    // 这里使用set来对本层元素进行去重
    const set = new Set();
    for (let i = startIndex; i < nums.length; i++) {
      if ((path.length && nums[i] < path.at(-1)) || set.has(nums[i])) {
        continue;
      }
      // 记录这个元素在本层用过了，本层后面不能再用了
      set.add(nums[i]);
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  };
  backtracking(nums);

  return result;
};

// 优化 ( 使用固定大小的 数组哈希 )
var findSubsequences2 = function(nums) {
  if (nums.length <= 1) return [];

  const result = [];
  const path = [];

  const backtracking = (nums, startIndex = 0) => {
      if (path.length >= 2) {
          result.push(path.slice());
      }
      // -100 <= nums[i] <= 100
      const map = Array(201).fill(0);
      for (let i = startIndex; i < nums.length; i++) {
          if (
              (path.length && nums[i] < path.at(-1)) ||
              map[nums[i] + 100] === 1
          ) {
              continue;
          }
          map[nums[i] + 100] = 1; // 标记为在本层使用过
          path.push(nums[i]);
          backtracking(nums, i + 1);
          path.pop();
      }
  }
  backtracking(nums);

  return result;
};