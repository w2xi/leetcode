/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const map = new Map();
  const result = [];

  // 思路:
  // 在「哈希表」中出现 2 次的为重复元素，未在「哈希表」中出现的元素为缺失元素
  // 在 [1, n] 中查询未出现的元素

  // 统计每个数出现的次数
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (map.has(curr)) {
      const count = map.get(curr);
      map.set(curr, count + 1);
      // 重复元素
      result.push(curr);
    } else {
      map.set(curr, 1);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      // 缺失元素
      result.push(i);
      break;
    }
  }

  return result;
};
