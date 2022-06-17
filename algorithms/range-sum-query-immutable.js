/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // 前缀和

  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  // nums[i]: 保存了 0 - i 的和

  this.nums = nums;
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function (left, right) {
  return left === 0 ? this.nums[right] : this.nums[right] - this.nums[left - 1];
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/