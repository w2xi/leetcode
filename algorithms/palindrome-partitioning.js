/**
 * 131. 分割回文串
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const path = [];

  const backtracking = (s, startIndex = 0) => {
    if (startIndex >= s.length) {
      result.push(path.slice());
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      if (isPalindrome(s, startIndex, i)) {
        const str = s.slice(startIndex, i + 1);
        path.push(str);
      } else {
        continue;
      }
      backtracking(s, i + 1);
      path.pop();
    }
  };
  backtracking(s);

  return result;
};

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
