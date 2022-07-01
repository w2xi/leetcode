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
  if (nums.length === 0) return null;
  let maxIndex = findMaxValueIndex(nums);
  let rootValue = nums[maxIndex];
  let left = nums.slice(0, maxIndex);
  let right = nums.slice(maxIndex + 1);

  const node = new TreeNode(rootValue);
  node.left = constructMaximumBinaryTree(left);
  node.right = constructMaximumBinaryTree(right);

  return node;
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
