/**
 * 62. 不同路径
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 动规五部曲来:

  // 1. 确定dp数组（dp table）以及下标的含义
  // dp[i][j]: 从 (0,0) 出发, 到 (i,j) 有 dp[i][j] 条路径

  // 2. 确定递推公式
  // dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

  // 3. dp数组的初始化
  const dp = Array.from({ length: m }, () => Array(n).fill(1));

  // 4. 确定遍历顺序
  // 从左至右一层一层遍历

  // 5. 举例推导dp数组
  // 画个图(表格), 推导一下

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
