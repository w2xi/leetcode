/**
 * 746. 使用最小花费爬楼梯
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // dp[i] 的定义: 到达第i台阶所花费的最少体力为dp[i]
  const dp = Array(cost.length + 1);
  // 初始化
  dp[0] = 0;
  dp[1] = 0;

  // 可以有两个途径得到dp[i]，一个是dp[i-1] 一个是dp[i-2]
  // dp[i - 1] 跳到 dp[i] 需要花费 dp[i - 1] + cost[i - 1]
  // dp[i - 2] 跳到 dp[i] 需要花费 dp[i - 2] + cost[i - 2]
  // 那么究竟是选从dp[i - 1]跳还是从dp[i - 2]跳呢？
  // 一定是选最小的，所以 dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[cost.length];
};
