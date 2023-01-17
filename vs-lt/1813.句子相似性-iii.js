/*
 * @lc app=leetcode.cn id=1813 lang=javascript
 *
 * [1813] 句子相似性 III
 */

// @lc code=start
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
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
// @lc code=end

