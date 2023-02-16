/**
 * 2341. 数组能形成多少数对
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  // 方法一: 哈希表 ( 数值不是很大  0 ~ 100 )
  const map = Array(101).fill(0);
  let pairsCount = 0;
  let leftCount = 0;

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]]++;
  }
  for (let i = 0; i < map.length; i++) {
    const curr = map[i];
    pairsCount += Math.floor(curr / 2);
    leftCount += curr % 2;
  }
  return [pairsCount, leftCount];
};

// 方法二: 排序 + 计数
var numberOfPairs = function (nums) {
  let pairsCount = 0;
  let left = nums.length;
  
  nums.sort((a, b) => a - b);
  // [1,2,3,4,5]
  let i = 0; 
  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      pairsCount++;
      left -= 2;
      i += 2;
    } else {
      i++;
    }
  }

  return [pairsCount, left];
}