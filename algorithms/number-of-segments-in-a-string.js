/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(" ").filter((val) => val).length;
};
