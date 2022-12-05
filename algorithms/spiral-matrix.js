/**
 * 54. 螺旋矩阵
 * 参考: https://leetcode.cn/problems/spiral-matrix/solution/cxiang-xi-ti-jie-by-youlookdeliciousc-3/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  // 赋值上下左右边界
  let left = 0,
    top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let result = [];

  while (true) {
    // 从左到右
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    // 重新设定上边界. 若上边界大于下边界，则遍历完成，下同
    if (++top > bottom) break;

    // 从上到下
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    if (--right < left) break;

    // 从右到左
    for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
    if (--bottom < top) break;

    // 从下到上
    for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
    if (++left > right) break;
  }

  return result;
};
