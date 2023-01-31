/**
 * [2319] 判断矩阵是否是一个 X 矩阵
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
  const row = grid.length;
  const col = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === j || i + j === col - 1) { // 45°对角线 135°对角线
        if (grid[i][j] === 0) {
          return false;
        }
      } else if (grid[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
};