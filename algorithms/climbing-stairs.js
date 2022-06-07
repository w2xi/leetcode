/**
 * 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 1 2 3 5 8
  // f(x) = f(x-2) + f(x-1)

  if (n === 1) return 1;
  if (n === 2) return 2;

  let p = 1,
    q = 2,
    temp;

  for (let i = 3; i <= n; i++) {
    temp = p;
    p = q;
    q = temp + q;
  }

  return q;
};
