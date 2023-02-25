/**
 * 斐波那契数
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 0 1 1 2 3 5 8 ...

  // 0. DP
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    const sum = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = sum;
  }
  return dp[1];


  // 1. 递归 + 记忆化
  // const memo = [0, 1];
  // const fibMemo = (n) => {
  //   if (memo[n] != null) {
  //     return memo[n];
  //   }
  //   return (memo[n] = fibMemo(n - 1) + fibMemo(n - 2));
  // };

  // return fibMemo(n);

  // 2. 递归
  // if (n < 1) return 0;
  // if (n <= 2) return 1;

  // return fib(n - 1) + fib(n - 2);

  // 3. 迭代
  // if (n < 1) return 0;
  // if (n <= 2) return 1;
  // let result = 0;
  // let last = 0;
  // let curr = 1;

  // for (let i = 2; i <= n; i++) {
  //   result = last + curr;
  //   last = curr;
  //   curr = result;
  // }
  // return result;
};
