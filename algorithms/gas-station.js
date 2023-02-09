/**
 * 134. 加油站
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // 暴力方法

  for (let i = 0; i < gas.length; i++) {
    let restGas = gas[i] - cost[i]; // 记录剩余油量
    let index = (i + 1) % gas.length;

    while (restGas > 0 && index !== i) {
      // 模拟以 i 为起点行驶一周
      restGas += gas[index] - cost[index];
      index = (index + 1) % gas.length;
    }
    // 如果以 i 为起点跑一圈, 剩余油量 >= 0, 返回该起始位置
    if (restGas >= 0 && index === i) {
      return i;
    }
  }

  return -1;
};

// 贪心方法
var canCompleteCircuit2 = function (gas, cost) {
  let start = 0;
  let totalSum = 0;
  let currSum = 0;

  for (let i = 0; i < gas.length; i++) {
    currSum += gas[i] - cost[i];
    totalSum += gas[i] - cost[i];

    if (currSum < 0) {
      start = i + 1;
      currSum = 0;
    }
  }

  return totalSum < 0 ? -1 : start;
};
