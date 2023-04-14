/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function (arr) {
  // by owen (评论区)
  // 处理方式为：
  // 第一步：从当前序列的后往前找，找到第一个降序的位置（A[i]>A[i+1]），则必存在能构造比当前小的序列。
  // 第二步：把A[i]后面的数字中，小于A[i]且最接近A[i]的值的数字找出来，和A[i]交换。
  // 为什么第一步不再往前找，因为往前找更换，会让小的值出现在高位，导致不是最大字典序

  let p = arr.length - 1;

  while (p > 0) {
    // 降序
    if (arr[p] < arr[p - 1]) break;
    p--;
  }
  if (p === 0) {
    // 表示 arr 是递增的
    return arr;
  }
  let left = p - 1;
  let right = p;

  while (1) {
    if (p + 1 < arr.length && arr[p + 1] < arr[left]) {
      p++;
      if (arr[p] > arr[right]) {
        right = p;
      }
    } else {
      // swap
      [arr[left], arr[right]] = [arr[right], arr[left]];
      break;
    }
  }

  return arr;
};
