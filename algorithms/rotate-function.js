/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxRotateFunction = function(nums) {
  // 参考: https://leetcode.cn/problems/rotate-function/solution/by-ac_oier-sxbi/
  
  let n = nums.length;
  let sum = 0;
  let f = 0, ans = 0;

  for (let i = 0; i < n; i++) {
      sum += nums[i];   // 计算 sum
      f += i * nums[i]; // 计算 F(0)
  }
  
  ans = f;
  
  for (let i = 1; i < n; i++) {      // 迭代计算 F(i)
      f = f + sum - n * nums[n - i]; // F(i) = F(i-1) + sum - n * A(n-i)
      ans = Math.max(ans, f);
  }

  return ans;
};