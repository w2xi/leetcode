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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // DFS
  if (!root) {
    return null;
  }
  const rightNode = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(rightNode);
  return root;

  // 层序遍历(BFS)
  // return levelOrder(root);
};

function levelOrder(root) {
  if (!root) return root;
  const queue = [];
  queue.push(root);

  while (queue.length) {
    let size = queue.length;
    while (size--) {
      const node = queue.shift();
      // 每次交换左右节点
      const rightNode = node.right;
      node.right = node.left;
      node.left = rightNode;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return root;
}
