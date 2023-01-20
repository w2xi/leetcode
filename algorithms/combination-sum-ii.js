/**
 * 40. 组合总和 II
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const result = [];
  const path = [];
  let sum = 0;

  // [1,1,2,5,6,7,10]

  const backtracking = (candidates, target, startIndex) => {
    if (sum === target) {
      result.push(path.slice());
      return;
    }
    for (
      let i = startIndex;
      i < candidates.length && sum + candidates[i] <= target; // 剪枝
      i++
    ) {
      // 要对同一树层使用过的元素进行跳过
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }
      const curr = candidates[i];
      path.push(curr);
      sum += curr;
      backtracking(candidates, target, i + 1);
      sum -= curr;
      path.pop();
    }
  };
  backtracking(candidates, target, 0);

  return result;
};
