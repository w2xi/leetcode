/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absentCount = 0;
  let currLateCount = 0;
  let maxLateCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      absentCount++;
    }
    if (s[i] === "L") {
      currLateCount++;
      maxLateCount = Math.max(currLateCount, maxLateCount);
    } else {
      currLateCount = 0;
    }
  }

  return absentCount < 2 && maxLateCount < 3;
};
