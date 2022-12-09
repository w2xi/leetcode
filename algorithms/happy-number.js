/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 获取下一个数
  const getNext = (num) => {
    let sum = 0;
    while (num > 0) {
      let d = num % 10;
      sum += d * d;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  // 用哈希集合检测循环
  const set = new Set();

  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getNext(n);
  }
  return n === 1;
};
