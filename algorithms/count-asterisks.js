/**
 * 2315. 统计星号
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  let count = 0;
  let j = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '|') {
      j++;
      if (j === 2) {
        // reset
        j = 0
      }
    }
    if (s[i] === '*' && j === 0) {
      count++;
    }
  }
  return count;
};