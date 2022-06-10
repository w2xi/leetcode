/**
 * 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 1. DP

  // 1 2 3 5 8
  // 递推公式
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

  // 2. 递归 memo

  // const memo = []
  // const helper = (num) => {
  //   if (num <= 2) return num;
  //   if (memo[num] != null) {
  //     return memo[num];
  //   } else {
  //     memo[num] = helper(num - 1) + helper(num - 2);
  //     return memo[num];
  //   }
  // }
  // return helper(n);
};
