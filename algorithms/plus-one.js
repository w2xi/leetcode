// 方法：进位
// 解题思路来自：两数相加
// Reference: https://leetcode-cn.com/problems/add-two-numbers/

/**
 * 加一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const lastIndex = digits.length - 1;
  // 进位
  let curry = 0;
  let arr = [];

  for (let i = lastIndex; i >= 0; i--) {
    let current = digits[i];

    if (i === lastIndex) {
      current++;
    }
    const sum = current + curry;
    curry = Math.floor(sum / 10);
    current = sum % 10;

    arr.unshift(current);
  }

  if (curry) {
    arr.unshift(curry);
  }

  return arr;
};
