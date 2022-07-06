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
var sortedArrayToBST = function (nums) {
  // 需要分割数组,产生了额外的内存开销
  if (nums.length == 0) return null;
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;

  // 无需切割数组
  // return helper(nums, 0, nums.length);
};

function helper(nums, left, right) {
  if (left >= right) return null;
  const mid = Math.floor((left + right) / 2);
  const root = new TreeNode(nums[mid]);

  root.left = helper(nums, left, mid);
  root.right = helper(nums, mid + 1, right);

  return root;
}
