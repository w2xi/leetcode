/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // 思路: 求和
  // 因为 s, t 只有一个字符的差别，所以分别求出 s, t 的所有字符对应的ASCII 码的值和
  // 然后做差，再将差转换为对应的字符即可

  let sSum = 0;
  let tSum = 0;

  for (let char of s) {
    sSum += char.charCodeAt();
  }
  for (let char of t) {
    tSum += char.charCodeAt();
  }

  return String.fromCharCode(tSum - sSum);

  // 思路: 位运算
  // let ret = 0;

  // for (let char of s) {
  //     ret ^= char.charCodeAt();
  // }
  // for (let char of t) {
  //     ret ^= char.charCodeAt();
  // }

  // return String.fromCharCode(ret);
};
