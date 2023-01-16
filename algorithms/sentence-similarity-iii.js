/**
 * 1813. 句子相似性 III
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  sentence1 = sentence1.split(" ");
  sentence2 = sentence2.split(" ");

  while (sentence1.length && sentence2.length) {
    if (sentence1[0] === sentence2[0]) {
      sentence1.shift();
      sentence2.shift();
    } else if (sentence1.at(-1) === sentence2.at(-1)) {
      sentence1.pop();
      sentence2.pop();
    } else {
      return false;
    }
  }

  return true;
};
