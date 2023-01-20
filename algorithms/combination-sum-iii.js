/**
 * 216. 组合总和 III
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];
  const path = [];
  let sum = 0;

  const backtracking = (k, n, startIndex) => {
    if (sum > n) {
      // 剪枝 ( 和已经大于 n 了, 继续往后遍历没有意义 )
      return;
    }
    if (path.length === k) {
      if (sum === n) {
        result.push(path.slice());
      }
      return;
    }
    for (let i = startIndex; i <= 9; i++) {
      path.push(i);
      sum += i;
      backtracking(k, n, i + 1, sum);
      sum -= i;
      path.pop();
    }
  };
  backtracking(k, n, 1);

  return result;
};
