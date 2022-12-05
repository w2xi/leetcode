/**
 * 59. 螺旋矩阵 II
 * 参考: https://leetcode.cn/problems/spiral-matrix-ii/solution/spiral-matrix-ii-mo-ni-fa-she-ding-bian-jie-qing-x/
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let cur = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  const tar = n * n;

  const mat = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  while (cur <= tar) {
    for (let i = left; i <= right; i++) mat[top][i] = cur++;
    top++;
    for (let i = top; i <= bottom; i++) mat[i][right] = cur++;
    right--;
    for (let i = right; i >= left; i--) mat[bottom][i] = cur++;
    bottom--;
    for (let i = bottom; i >= top; i--) mat[i][left] = cur++;
    left++;
  }

  return mat;
};
