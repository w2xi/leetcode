/**
 * 6307. 递枕头
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  // 找规律即可
  const cnt = Math.floor(time / (n - 1));
  const remain = Math.floor(time % (n - 1));

  // 4 12 ( 4 ... 0 )
  // 1 2 3 4 

  // 4 16 ( 5 ... 1 )
  // 1 2 3 4

  if (cnt % 2 === 0) { // even
    return remain + 1;
  } else { // odd
    return n - remain;
  }
};