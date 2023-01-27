/**
 * 51. N 皇后
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let result = [];
  let chessBoard = Array.from({ length: n }, () => Array(n).fill("."));

  const backtracing = (row, chessBoard) => {
    if (row === n) {
      result.push(transformChessBoard(chessBoard));
      return;
    }
    for (let col = 0; col < n; col++) {
      // 验证合法就可以放
      if (isValid(row, col, chessBoard, n)) {
        chessBoard[row][col] = "Q"; // 放置皇后
        backtracing(row + 1, chessBoard);
        chessBoard[row][col] = "."; // 回溯，撤销皇后
      }
    }
  };
  backtracing(0, chessBoard);

  return result;
};

function isValid(row, col, chessBoard, n) {
  // 检查列
  for (let i = 0; i < row; i++) {
    if (chessBoard[i][col] === "Q") {
      return false;
    }
  }
  // 检查45度角是否有皇后
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chessBoard[i][j] === "Q") {
      return false;
    }
  }
  // 检查135度角是否有皇后
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (chessBoard[i][j] === "Q") {
      return false;
    }
  }
  return true;
}

function transformChessBoard(chessBoard) {
  let chessBoardBack = [];
  chessBoard.forEach((row) => {
    let rowStr = "";
    row.forEach((value) => {
      rowStr += value;
    });
    chessBoardBack.push(rowStr);
  });

  return chessBoardBack;
}
