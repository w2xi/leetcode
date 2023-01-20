/**
 * 39. 组合总和
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const path = [];
  let sum = 0;

  const backtracking = (candidates, target, startIndex) => {
    if (sum > target) return;
    if (sum === target) {
      result.push(path.slice());
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      let curr = candidates[i];
      path.push(curr);
      sum += curr;
      backtracking(candidates, target, i);
      sum -= curr;
      path.pop();
    }
  };
  backtracking(candidates, target, 0);

  return result;
};
