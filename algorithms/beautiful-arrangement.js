/**
 * 526. 优美的排列
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  const used = Array(n + 1).fill(false);

  const backtracking = (n, index) => {
    if (index === n + 1) {
      return 1;
    }
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (used[i]) continue;
      if (i % index !== 0 && index % i !== 0) continue;
      used[i] = true;
      count += backtracking(n, index + 1);
      used[i] = false;
    }
    return count;
  };
  return backtracking(n, 1);
};
