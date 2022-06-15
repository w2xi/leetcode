/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let a, b;
  a = m;
  b = n;

  for (let i = 0; i < ops.length; i++) {
    a = Math.min(a, ops[i][0]);
    b = Math.min(b, ops[i][1]);
  }

  return a * b;
};
