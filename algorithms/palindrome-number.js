/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }

  if (x.toString().split('').reverse().join('') === x.toString()) {
    return true
  }

  return false
};