/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegtive = x < 0;
  let sum = 0;

  if (x === 0) {
    return 0;
  }

  x = Math.abs(x);

  while (x) {
    let t = x % 10;
    sum = t + sum * 10;
    x = Math.floor(x / 10);
  }

  sum = isNegtive ? -sum : sum;

  if (sum < -Math.pow(2, 31) || sum > Math.pow(2, 31) - 1) {
    return 0;
  }

  return sum;
};
