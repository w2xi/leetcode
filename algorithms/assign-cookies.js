/**
 * 455. 分发饼干
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let j = 0,
    i = 0;
  while (j < s.length && i < g.length) {
    if (s[j] >= g[i]) {
      i++;
    }
    j++;
  }
  return i;
};
