/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  // 不符合条件，返回原矩阵
  if (m === r || n === c || r * c !== m * n) {
    return mat;
  }

  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];

  // 扁平化为一维数组
  const flatMat = mat.flat();
  const result = [];

  for (let i = 0; i < flatMat.length; i += c) {
    result.push(flatMat.slice(i, i + c));
  }

  return result;
};
