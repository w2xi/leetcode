/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split("");
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      reverse(arr, start, i - 1);
      start = i + 1;
    }
  }
  reverse(arr, start, arr.length - 1);
  return arr.join("");
};
function reverse(array, left, right) {
  while (left <= right) {
    swap(array, left, right);
    left++;
    right--;
  }
}
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
