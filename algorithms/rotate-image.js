/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 第一行 成为 最后一列
  // 第二行 成为 倒数第二列
  // ...

  const size = matrix.length;

  // 上下反转
  for (let i = 0; i < Math.floor(size / 2); i++) {
    const temp = matrix[i];
    const j = size - i - 1;
    matrix[i] = matrix[j];
    matrix[j] = temp;
  }

  // 沿对角线反转
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  return matrix;
};
