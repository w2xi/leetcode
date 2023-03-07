/**
 * 63. 不同路径 II
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  // 初始化 dp
  // 第一列 障碍物之前的为 1 之后的为 0
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      break;
    }
    dp[i][0] = 1;
  }
  // 第一行 障碍物之前的为 1 之后的为 0
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      break;
    }
    dp[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }
  return dp[m - 1][n - 1];
};
