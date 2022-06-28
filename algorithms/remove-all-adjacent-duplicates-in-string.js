/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const result = [];

  for (let c of s) {
    if (result.at(-1) === c) {
      result.pop();
    } else {
      result.push(c);
    }
  }

  return result.join("");
};
