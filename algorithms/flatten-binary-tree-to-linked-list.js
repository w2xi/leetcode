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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // 前序遍历(先访问左节点) 中左右 从前往后
  // 后序遍历(先访问右节点) 右左中 从后向前

  // 记录上一个节点
  let pre = null;
  const dfs = (root) => {
    if (!root) return null;
    dfs(root.right);
    dfs(root.left);
    root.right = pre;
    root.left = null;
    pre = root;
  };
  dfs(root);
};
