/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const map = Array(26).fill(0);

  for (let i = 0; i < sentence.length; i++) {
    const index = sentence[i].charCodeAt() - 97;
    map[index]++;
  }
  for (let i = 0; i < map.length; i++) {
    if (map[i] === 0) {
      return false;
    }
  }

  return true;
};
