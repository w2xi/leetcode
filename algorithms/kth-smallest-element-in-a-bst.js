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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 中序遍历二叉搜索树相当与遍历有序数组

  // 递归 需要遍历整棵树
  let counter = 0;
  let rankKNum = 0;
  const dfs = (root) => {
    if (!root) return null;
    dfs(root.left);
    counter++;
    if (k === counter) {
      rankKNum = root.val;
    }
    dfs(root.right);
  };
  dfs(root);
  return rankKNum;

  // 迭代 无需遍历整棵树
  // return inOrderIterate(root, k);
};

function inOrderIterate(root, k) {
  const stack = [];
  let curr = root,
    node = null;
  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    node = stack.pop();
    k--;
    if (k === 0) {
      break;
    }
    if (node.right) {
      curr = node.right;
    }
  }
  return node.val;
}
