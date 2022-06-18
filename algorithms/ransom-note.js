/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 数组哈希计数
  const countArr = Array(26).fill(0);

  for (let char of magazine) {
    const index = char.charCodeAt() - "a".charCodeAt();
    countArr[index]++;
  }

  for (let char of ransomNote) {
    const index = char.charCodeAt() - "a".charCodeAt();
    countArr[index]--;

    if (countArr[index] < 0) {
      return false;
    }
  }

  return true;

  // 哈希表
  // const map = new Map();

  // for (let char of magazine) {
  //   if (map.has(char)) {
  //     const count = map.get(char);
  //     map.set(char, count + 1);
  //   } else {
  //     map.set(char, 1);
  //   }
  // }

  // for (let char of ransomNote) {
  //   if (map.has(char)) {
  //     const count = map.get(char);
  //     if (count - 1 < 0) {
  //       return false;
  //     } else {
  //       map.set(char, count - 1);
  //     }
  //   } else {
  //     return false;
  //   }
  // }

  // return true;
};
