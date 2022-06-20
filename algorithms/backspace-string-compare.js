/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sStr = "";
  let tStr = "";

  for (let c of s) {
    if (c === "#") {
      sStr = sStr.slice(0, -1);
    } else {
      sStr += c;
    }
  }
  for (let c of t) {
    if (c === "#") {
      tStr = tStr.slice(0, -1);
    } else {
      tStr += c;
    }
  }

  return sStr === tStr;
};
