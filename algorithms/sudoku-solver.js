/**
 * 37. 解数独
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const row = board.length;
  const col = board[0].length;

  const backTracking = (board) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        // 如果还未填充数字
        if (board[i][j] === ".") {
          for (let k = 1; k <= 9; k++) {
            if (isValid(i, j, String(k), board)) {
              board[i][j] = String(k); // 放置 k
              // 如果找到合适的一组立刻返回
              if (backTracking(board)) {
                return true;
              }
              board[i][j] = "."; // 回溯 撤回 k
            }
          }
          return false; // 9个数都试完了，都不行，那么就返回false
        }
      }
    }
    return true; // 遍历完没有返回false，说明找到了合适棋盘位置了
  };
  backTracking(board);
};

function isValid(row, col, val, board) {
  // 检查行 是否重复
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === val) {
      return false;
    }
  }
  // 检查列 是否重复
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === val) {
      return false;
    }
  }
  // 检查9宫格 是否重复
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === val) {
        return false;
      }
    }
  }
  return true;
}
