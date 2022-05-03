// 方法一：Map(映射)

/**
 * 字符串中的第一个唯一字符
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (map.has(char)) {
      let count = map.get(char);
      map.set(char, count + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};
