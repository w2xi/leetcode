/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  let s = String(n);
  let end = s.length - 1;
  let temp = 0;

  for (let i = end; i > 0; i--) {
    if (s[i] < s[i - 1]) {
      temp = +s.slice(i) + 1;
      s = String(s - temp);
    }
  }
  return +s;
};

var monotoneIncreasingDigits = function (n) {
  const arr = String(n).split("");
  let index = arr.length;

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      index = i;
      arr[i - 1]--;
    }
  }
  for (let i = index; i < arr.length; i++) {
    arr[i] = "9";
  }
  return +arr.join("");
};
