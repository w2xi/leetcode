/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 1. 栈
  if (s.length % 2 !== 0) {
    return false;
  }
  const stack = [];
  const o = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let c of s) {
    if (o[c]) {
      stack.push(o[c]);
    } else if (stack.length === 0 || stack.pop() !== c) {
      return false;
    }
  }
  return stack.length === 0;

  // 2. 暴力解题
  // let len = s.length / 2;

  // for (let i = 0; i < len; i++) {
  //   s = s.replace("()", "").replace("[]", "").replace("{}", "");
  //   if (!s) break;
  // }

  // return !s;
};
