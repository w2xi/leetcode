/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  // 数组哈希计数
  const result = [];
  const size = 26;
  const firstHash = Array(size).fill(0);
  const firstWord = words[0];

  for (let i = 0; i < firstWord.length; i++) {
    const index = firstWord[i].charCodeAt() - "a".charCodeAt();
    firstHash[index]++;
  }
  const tempHash = Array(26).fill(0);
  for (let i = 1; i < words.length; i++) {
    const curr = words[i];
    for (let j = 0; j < curr.length; j++) {
      const index = curr[j].charCodeAt() - "a".charCodeAt();
      tempHash[index]++;
    }
    for (let k = 0; k < size; k++) {
      firstHash[k] = Math.min(firstHash[k], tempHash[k]);
    }
    // reset
    tempHash.fill(0);
  }

  for (let i = 0; i < firstHash.length; i++) {
    while (firstHash[i]--) {
      result.push(String.fromCharCode(i + "a".charCodeAt()));
    }
  }

  return result;
};
