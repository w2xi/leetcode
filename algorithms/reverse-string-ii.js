/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const arr = s.split("");
  for (let i = 0; i < arr.length; i += 2 * k) {
    // two pointers
    let left = i;
    let right = i + k - 1;
    if (right > arr.length - 1) {
      right = arr.length - 1;
    }
    while (left < right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return arr.join("");
};

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
