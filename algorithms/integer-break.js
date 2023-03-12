/**
 * 343. 整数拆分
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const dp = Array(n + 1).fill(0);
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i >> 1; j++) {
      dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j);
    }
  }

  return dp[n];
};

// 贪心
var integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  if (n === 4) return 4;

  let a = 1;
  while (n > 4) {
    n -= 3;
    a *= 3;
  }

  return a * n;
};
