/**
 * 93. 复原 IP 地址
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = [];
  const path = [];

  const backtracking = (s, startIndex = 0) => {
    if (path.length === 4) {
      if (startIndex === s.length) {
        result.push(path.join("."));
      }
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      const str = s.slice(startIndex, i + 1);
      if (str.length >= 3 && str > 255) {
        break;
      }
      if (str.length > 1 && str[0] === "0") {
        // 排除前导0
        break;
      }
      path.push(str);
      backtracking(s, i + 1);
      path.pop();
    }
  };
  backtracking(s);

  return result;
};
