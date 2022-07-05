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

  // 需要分割数组,产生了额外的内存开销
  if (nums.length === 0) return null;
  let maxIndex = findMaxValueIndex(nums);
  let rootValue = nums[maxIndex];
  let left = nums.slice(0, maxIndex);
  let right = nums.slice(maxIndex + 1);

  const node = new TreeNode(rootValue);
  node.left = constructMaximumBinaryTree(left);
  node.right = constructMaximumBinaryTree(right);

  return node;

  // 优化: 不分割数组,而是通过下标索引在原数组上操作
  // return helper(nums, 0, nums.length);
};
function findMaxValueIndex(array) {
  let maxIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[maxIndex] < array[i]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

// 优化: 不分割数组,而是通过下标索引在原数组上操作
function helper(nums, left, right) {
  if (left >= right) return null;
  let maxIndex = findMaxIndex(nums, left, right);
  let rootValue = nums[maxIndex];

  const root = new TreeNode(rootValue);
  root.left = helper(nums, left, maxIndex);
  root.right = helper(nums, maxIndex + 1, right);

  return root;
}
function findMaxIndex(array, start, end) {
  let maxIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (array[maxIndex] < array[i]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}
