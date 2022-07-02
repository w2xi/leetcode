/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  // 中序遍历二叉搜索树等于遍历有序数组
  //       3
  //     /   \
  //    2     4
  //   / \   / \
  //  2   2 4   4
  let prev = null;
  let count = 0;
  let maxCount = 0;
  const result = [];
  const dfs = (node) => {
    if (node) {
      dfs(node.left);
      const curr = node;
      if (prev == null) {                  // 第一个节点
        count = 1;
      } else if (prev.val === curr.val) {  // 当前节点和前一个节点值相同
        count++;
      } else {                             // 当前节点和前一个节点值不相
        count = 1;
      }
      if (maxCount === count) {            // 可能有多个众数
        result.push(curr.val);
      }
      if (count > maxCount) {              // 大于前面的最大频次
        result.length = 0;                 // 清空数组
        maxCount = count;                  // 更新最大频次
        result.push(curr.val);
      }
      prev = curr;
      dfs(node.right);
    }
  }
  dfs(root);

  return result;
};