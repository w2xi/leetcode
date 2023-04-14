function mostFrequentEven(nums: number[]): number {
  const map = new Map<number, number>();
  let maxCount = 0;
  let ans = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let c = (map.get(nums[i]) || 0) + 1;
      map.set(nums[i], c);

      if (
        c > maxCount ||
        c === maxCount && nums[i] < ans
      ) {
        ans = nums[i];
        maxCount = c;
      }
    }
  }

  return ans;
}