/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  path = path.split("/");
  let stack = [];

  // 忽略 '.' ''
  // 遇到 '..' 则弹出栈顶

  for (let char of path) {
    if (char === "..") {
      stack.pop();
    } else if (char && char !== ".") {
      stack.push(char);
    }
  }

  return `/${stack.join("/")}`;
};
