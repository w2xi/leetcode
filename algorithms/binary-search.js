/**
 * 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 1. 迭代
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;

  // 2. 递归
  // const binarySearchRecursive = (array, left, right, target) => {
  //   if (left <= right) {
  //     const middle = Math.floor((left + right) / 2);

  //     if (target < array[middle]) {
  //       return binarySearchRecursive(array, left, middle - 1, target);
  //     } else if (target > array[middle]) {
  //       return binarySearchRecursive(array, middle + 1, right, target);
  //     } else {
  //       return middle;
  //     }
  //   } else {
  //     return -1;
  //   }
  // };

  // return binarySearchRecursive(nums, 0, nums.length - 1, target);
};
