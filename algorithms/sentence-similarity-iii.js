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

  // return areSentencesSimilar2(sentence1, sentence2);
};

// 双端指针解法
var areSentencesSimilar2 = function (sentence1, sentence2) {
  sentence1 = sentence1.split(' ')
  sentence2 = sentence2.split(' ')

  let left1 = 0;
  let right1 = sentence1.length - 1;
  let left2 = 0;
  let right2 = sentence2.length - 1;

  while (left1 <= right1 && left2 <= right2) {
    if (
      sentence1[left1] !== sentence2[left2] &&
      sentence1[right1] !== sentence2[right2]
    ) {
      return false;
    }
    if (sentence1[left1] === sentence2[left2]) {
      left1++;
      left2++;
    }
    if (sentence1[right1] === sentence2[right2]) {
      right1--;
      right2--;
    }
  }
  return true;
};