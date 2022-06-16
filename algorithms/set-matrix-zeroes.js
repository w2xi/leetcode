/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const row = Array(m).fill(false);
  const col = Array(n).fill(false);

  // 元素为0时标记行和列对应的索引位置为true
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (0 === matrix[i][j]) {
        row[i] = col[j] = true;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 置0对应的行或列
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};
