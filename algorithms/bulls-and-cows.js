/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  // 参考: https://leetcode.cn/problems/bulls-and-cows/solution/gong-shui-san-xie-jian-dan-mo-ni-ti-by-a-tdhs/

  let bullsCount = 0;
  let cowsCount = 0;

  let sArr = Array(10).fill(0);
  let gArr = Array(10).fill(0);

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bullsCount++;
    } else {
      sArr[secret[i]]++;
      gArr[guess[i]]++;
    }
  }

  for (let i = 0; i < 10; i++) {
    cowsCount += Math.min(sArr[i], gArr[i]);
  }

  return `${bullsCount}A${cowsCount}B`;
};
