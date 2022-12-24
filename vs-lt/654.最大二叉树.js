/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function (nums) {
  // 分而治之
  // 需要分割数组, 会产生了额外的内存开销

  // if (nums.length === 0) return null;

  // let maxIndex = findMaxValueIndex(nums);
  // let rootValue = nums[maxIndex];
  // let left = nums.slice(0, maxIndex);
  // let right = nums.slice(maxIndex + 1);

  // const node = new TreeNode(rootValue);
  // node.left = constructMaximumBinaryTree(left);
  // node.right = constructMaximumBinaryTree(right);

  // return node;

  // 优化: 不分割数组,而是通过下标索引在原数组上操作
  return constructMaximumBinaryTree2(nums, 0, nums.length);
};

function findMaxValueIndex(array, start = 0, end = array.length) {
  let maxIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (array[maxIndex] < array[i]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

function constructMaximumBinaryTree2(nums) {
  // const findMaxValueIndex = (array, start, end) => {
  //   let maxIndex = start;
  //   for (let i = start + 1; i < end; i++) {
  //     if (array[maxIndex] < array[i]) {
  //       maxIndex = i;
  //     }
  //   }
  //   return maxIndex;
  // }
  // 优化: 不分割数组,而是通过下标索引在原数组上操作
  const helper = (nums, start, end) => {
    // [3,2,1,6,0,5]
    if (start === end) return null;
    const index = findMaxValueIndex(nums, start, end);
    const val = nums[index];
    const root = new TreeNode(val);

    if (end - start === 1) return root;
    // 左闭右开
    // [start, index)
    root.left = helper(nums, start, index);
    // [index + 1, end)
    root.right = helper(nums, index + 1, end);
    
    return root;
  }

  return helper(nums, 0, nums.length);
}
// @lc code=end

