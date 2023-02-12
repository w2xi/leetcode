/**
 * 1138. 字母板上的路径
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  let result = "";
  let prevRow = 0;
  let prevCol = 0;

  for (let i = 0; i < target.length; i++) {
    const index = target[i].charCodeAt() - 97;
    const currRow = Math.floor(index / 5);
    const currCol = index % 5;

    const rowDiff = Math.abs(currRow - prevRow);
    const colDiff = Math.abs(currCol - prevCol);

    // 优先 `上移` 和 `左移` 避免 'z' 字符的问题
    if (currRow < prevRow) {
      result += "U".repeat(rowDiff);
    }
    if (currCol < prevCol) {
      result += "L".repeat(colDiff);
    }
    if (currRow > prevRow) {
      result += "D".repeat(rowDiff);
    }
    if (currCol > prevCol) {
      result += "R".repeat(colDiff);
    }
    result += "!";
    prevRow = currRow;
    prevCol = currCol;
  }
  return result;
};
