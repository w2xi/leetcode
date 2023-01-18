/**
 * 1814. 统计一个数组中好对子的数目
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const rev = (num) => {
    let result = 0;
    while (num) {
      result = result * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return result;
  };
  
  // nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
  // <=> 等价于
  // nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])

  // 主要思路 (by 评论区大佬)：
  // 假设：以 nums[i] - rev(nums[i]) 为整体出现的次数为N，之后假想将这 N 个数放入一个数组中 L
  // 则： `好的` 就相当于这个数组 L 的所有长度为 2 的子集，而所求个数即为符合条件的子集个数
  // 易知：长度为 N 的数组 L，其长度为 2 的子集个数为 N * (N - 1) / 2

  let result = 0;
  const mod = 1e9 + 7;
  const map = {};

  // 0 + 1 + 2 + ... + (n - 1)
  // =>
  // Sum = n * (n - 1) / 2

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i] - rev(nums[i]);
    result = (result + (map[key] || 0)) % mod;
    map[key] = (map[key] || 0) + 1;
  }
  return result;
};
