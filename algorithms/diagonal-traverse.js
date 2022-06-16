/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length - 1;
  const n = mat[0].length - 1;

  let result = [];
  let index = 1;
  let row = 0;
  let col = 0;

  while (row <= m && col <= n) {
    let tempRow = row;
    let tempCol = Math.min(col, n);
    const temp = [];
    // 对角线遍历
    while (tempRow <= m && tempCol >= 0) {
      temp.push(mat[tempRow][tempCol]);
      tempRow++;
      tempCol--;
    }
    if (index % 2 === 0) {
      result.push(...temp);
    } else {
      // 奇数层反转数组
      result.push(...temp.reverse());
    }
    if (col === n) {
      row++;
    }
    if (col < n) {
      col++;
    }
    // 上半部分遍历完后 col = n, col 将保持不变

    index++;
  }
  return result;
};