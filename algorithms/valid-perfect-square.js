/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  // num = 9
  // 1 9 mid = 5
  // 1 4 mid = 2
  // 3 4 mid = 3

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid < num) {
      left = mid + 1;
    } else if (mid * mid > num) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};
