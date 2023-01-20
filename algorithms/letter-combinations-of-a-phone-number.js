/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const result = [];
  const map = [
    "", // 0
    "", // 1
    "abc", // 2
    "def", // 3
    "ghi", // 4
    "jkl", // 5
    "mno", // 6
    "pqrs", // 7
    "tuv", // 8
    "wxyz", // 9
  ];
  let str = "";

  const backtracking = (digits, startIndex = 0) => {
    if (str.length === digits.length) {
      result.push(str);
      return;
    }
    for (let i = startIndex; i < digits.length; i++) {
      const chars = map[digits[i]];
      for (let j = 0; j < chars.length; j++) {
        str += chars[j];
        backtracking(digits, i + 1);
        str = str.slice(0, str.length - 1);
      }
    }
  };
  backtracking(digits);

  return result;
};
