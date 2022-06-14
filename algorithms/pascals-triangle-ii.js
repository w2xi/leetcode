/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = Array.from({ length: rowIndex + 1 }, (_, val) =>
    Array(val + 1).fill(1)
  );

  for (let i = 0; i < result.length; i++) {
    const row = result[i];
    if (i > 1) {
      const prevRow = result[i - 1];
      for (let j = 1; j < row.length - 1; j++) {
        row[j] = prevRow[j - 1] + prevRow[j];
      }
    }
  }

  return result[rowIndex];
};
