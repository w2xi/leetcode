/**
 * 在排序数组中查找元素的第一个和最后一个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 2. 二分查找 O(log n)
  const binarySearch = (nums, target, isLeftBoundary = true) => {
    let left = 0;
    let right = nums.length - 1;
    let middle,
      res = -1;
    while (left <= right) {
      middle = Math.floor((left + right) / 2);
      if (target < nums[middle]) {
        right = middle - 1;
      } else if (target > nums[middle]) {
        left = middle + 1;
      } else {
        res = middle;
        if (isLeftBoundary) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
    }
    return res;
  };

  let result = [-1, -1];
  // 找左边界，由右侧逼近
  result[0] = binarySearch(nums, target, true);
  // 找右边界，由左侧逼近
  result[1] = binarySearch(nums, target, false);

  return result;

  // 1. 双指针 O(n)
  // let left = 0;
  // let right = nums.length - 1;
  // let result = [-1, -1];

  // while (left <= right) {
  //   if (nums[left] !== target) {
  //     left++;
  //   } else if (result[0] === -1) {
  //     result[0] = left;
  //   }
  //   if (nums[right] !== target) {
  //     right--;
  //   } else if (result[1] === -1) {
  //     result[1] = right;
  //   }
  //   // 如果全部找到，则直接退出
  //   if (result[0] !== -1 && result[1] !== -1) {
  //     break;
  //   }
  // }
  // return result;
};
