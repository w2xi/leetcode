/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const map = Array(10).fill(0);

  for (let i = 0; i < num.length; i++) {
    map[num[i]]++;
  }
  for (let i = 0; i < num.length; i++) {
    if (map[i] != num[i]) {
      return false;
    }
  }
  return true;
};