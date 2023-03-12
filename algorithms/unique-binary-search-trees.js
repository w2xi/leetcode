/**
 * 96. 不同的二叉搜索树
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 节点数 种数
  //  1     1
  //  2     2
  //  3     5

  const dp = Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};
