// 背包问题

// 01 背包 ( 二维 dp )
function bagProblem() {
  const weights = [1,3,4]; // 物品的重量
  const values = [15,20,30]; // 物品的价值
  const capacity = 4; // 背包的容量
  const n = weights.length; // 物品个数

  // 二维 dp
  const dp = Array.from({ length: n }, () => Array(capacity + 1).fill(0));
  
  // dp[i][j] 的含义: 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少

  // 递推公式:
  // dp[i][j] = Math.max(dp[i - 1][j], dp[i - ][j - weights[i]] + values[i])

  // 初始化
  for (let j = weights[0]; j <= capacity; j++) {
    dp[0][j] = values[0];
  } 
  
  //         重量  价值
  // 物品 0   1     15
  // 物品 1   3     20
  // 物品 2   4     30

  // 可以画个表格来理解 dp[i][j]
  // dp[i][j]
  //           背包重量 j  
  //         0  1  2  3  4
  // 物品 0  0  15 15 15 15
  // 物品 1  0  15 15 20 35
  // 物品 2  0  15 15 20 35

  for (let i = 1; i < n; i++) { // 遍历物品
    for (let j = 0; j <= capacity; j++ ) { // 遍历背包容量
      if (j < weights[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i]] + values[i]);
      }
    }
  }

  console.log(dp);

  return dp[n - 1][capacity];
}

console.log(bagProblem()); // 35

// 01 背包 ( 一维 dp, 滚动数组 )
function bagProblem2() {
  const weights = [1,3,4]; // 物品的重量
  const values = [15,20,30]; // 物品的价值
  const capacity = 4; // 背包的容量
  const n = weights.length; // 物品个数

  // dp[j] 的含义: 
  // 容量为 j 的背包最大价值

  //  递推公式:
  // dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i])

  // 初始化为 0
  const dp = Array(capacity + 1).fill(0);

  for (let i = 0; i < n; i++) { // 遍历物品
    for (let j = capacity; j >= weights[i]; j--) { // 遍历背包容量 (逆序)
      dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i]);
    }
  }

  console.log(dp);

  return dp[capacity];
}

console.log(bagProblem2());

/**
 * 背包问题 - 暴力解法
 * @param {*} capacity 
 * @param {*} weights 
 * @param {*} values 
 * @param {number} n 物品数量
 */
 function crashBag(capacity, weights, values, n) {
  // capacity: 5
  // weights: [2,3,4]
  // values:  [3,4,5]

  let weightSum = 0;
  let valueSum = 0;
  let maxValue = 0;

  const backTracking = (start) => {
    if (weightSum > capacity) return;
    
    maxValue = Math.max(maxValue, valueSum);

    for (let i = start; i < n; i++) {
      weightSum += weights[i];
      valueSum += values[i];
      console.log(weightSum)
      backTracking(i + 1);
      weightSum -= weights[i];
      valueSum -= values[i];
      console.log(weightSum)
    }
  }
  backTracking(0);

  return maxValue;
}

const maxValue = helper(5, [2,3,4], [3,4,5], 3);

// console.log('max value:', maxValue);


      