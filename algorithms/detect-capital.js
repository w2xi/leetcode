/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let size = word.length;
  let upperCaseCount = 0;
  let lowerCaseCount = 0;

  for (let c of word) {
    if (c >= "a" && c <= "z") {
      lowerCaseCount += 1;
    } else {
      upperCaseCount += 1;
    }
  }

  // 是否首字母大写
  const isFirstLetterCapital = word[0] >= "A" && word[0] <= "Z";

  return (
    upperCaseCount === size ||
    lowerCaseCount === size ||
    (isFirstLetterCapital && lowerCaseCount === size - 1)
  );
};
