/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x;

  let left = 1;
  let right = x;

  // 1,2,3,4,5,6,7,8,9,10

  while (left <= right) {
    let middle = (left + right) >> 1;
    if (middle > x / middle) {
      right = middle - 1;
    } else if (middle < x / middle) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return right;
};
