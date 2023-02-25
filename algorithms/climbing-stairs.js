/**
 * 70. 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 1 2 3 5 8
  // dp(i) = dp(i - 1) + dp(i - 2)

  if (n <= 2) return n;
  const dp = [1, 2];

  for (let i = 3; i <= n; i++) {
    const sum = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = sum;
  }
  return dp[1];
};
