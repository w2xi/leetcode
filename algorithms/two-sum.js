/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  // 方式一: 简单粗暴 但是会超出时间限制 无法通过
  // for (let i = 0; i < nums.length - 1; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //         if (nums[i] + nums[j] === target) {
  //             return [i, j]
  //         }
  //     }
  // }

  // 方式二: 一个 for 循环解决
  const wanted = {}

  for (let i = 0; i < nums.length; i++){
      const curr = nums[i]
      const theOther = target - curr

      if (typeof wanted[curr] === 'number') {
          return [wanted[curr], i]
      }

      wanted[theOther] = i
  }
}