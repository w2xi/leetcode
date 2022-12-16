/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的最小深度
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  // DFS
  if (!root) return 0;
  // 叶子节点 深度为 1
  if (!root.left && !root.right) return 1;
  // 左空 返回右子树深度+1
  if (!root.left) return minDepth(root.right) + 1;
  // 右空 返回左子树深度+1
  if (!root.right) return minDepth(root.left) + 1;
  // 左右都不空，返回左右子树深度较小值 + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;

  // BFS
  // return bfs(root);
};

function bfs(root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;

  while (queue.length) {
    let size = queue.length;
    // 记录当前深度
    depth++;
    while (size--) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);

      if (!node.left && !node.right) { // 叶子节点 已经是最低的一层了
        return depth;
      }
    }
  }

  return depth;
}
