/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  //库函数
  // return s.replace(/\s/g, '%20');

  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      s[i] = "%20";
    }
  }

  return s.join("");
};
