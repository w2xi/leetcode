/**
 * 59. 螺旋矩阵 II
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  // 矩阵的行列索引
  let i, j;
  // 起始位置
  let startX = 0, startY = 0;
  // 旋转圈数
  let loop = n >> 1;
  // 中间位置
  let mid = loop;
  // 控制每一条边遍历的长度，每次循环右边界收缩一位
  let offset = 1;
  // 填充矩阵的值
  let count = 1;
  // 结果矩阵
  let nums = Array.from({ length: n }, () => []);

  while (loop--) {
      // 上行从左到右（左闭右开）
      for (j = startX; j < n - offset; j++) {
          nums[startX][j] = count++;
      }
      // 右列从上到下（左闭右开）
      for (i = startY; i < n - offset; i++) {
          nums[i][j] = count++;
      }
      // 下行从右到左（左闭右开）
      for (; j > startY; j--) {
          nums[i][j] = count++;
      }
      // 左列从下到上（左闭右开）
      for (; i > startX; i--) {
          nums[i][j] = count++;
      }
      // 更新起始位置
      startX++;
      startY++;
      // offset 控制每一圈里每一条边遍历的长度
      offset++;
  }
  // n 为奇数, 处理中间的值
  if (n % 2 === 1) {
      nums[mid][mid] = count;
  }

  return nums;
};