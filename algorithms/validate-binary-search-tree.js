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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 中序遍历二叉搜索树等于遍历有序数组
  // 空间复杂度 O(1)
  let prev = null;
  const inOrder = (node) => {
    if (!node) {
      return true;
    }
    const left = inOrder(node.left);
    if (prev && prev.val >= node.val) {
      return false;
    }
    // 记录前一个节点
    prev = node;
    const right = inOrder(node.right);

    return left && right;
  };

  return inOrder(root);

  // return inOrder2(root);
};

// 空间复杂度 O(n)
function inOrder2(root) {
  const arr = [];
  const dfs = (node) => {
    if (node) {
      dfs(node.left);
      arr.push(node.val);
      dfs(node.right);
    }
  };
  dfs(root);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }
  return true;
}
