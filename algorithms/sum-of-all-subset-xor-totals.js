/**
 * 1863. 找出所有子集的异或总和再求和
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let sum = 0;
  const path = [];

  const backtracking = (nums, startIndex = 0) => {
    // 这里的 path 就是每个子集
    let itemSum = 0;
    for (let i = 0; i < path.length; i++) {
      itemSum ^= path[i];
    }
    sum += itemSum;
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  };
  backtracking(nums);

  return sum;
};
