/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  // 排序 + 模拟
  nums.sort((a, b) => a - b);
  let count = 0;
  // 0 1 3 5 5 -> 0 0 2 4 4 -> 0 0 0 2 2 -> 0 0 0 0 0
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (nums[i] !== 0) {
      for (let j = i; j < nums.length; j++) {
        nums[j] -= curr;
      }
      count++;
    }
  }
  return count;
};

// 其实就是找不重复数字的个数
var minimumOperations = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0 && nums[i] !== nums[i + 1]) {
      count++;
    }
  }
  return count;
}

var minimumOperations = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      set.add(nums[i]);
    }
  }

  return set.size;
}