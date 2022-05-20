/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉搜索树中的搜索
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const searchBSTNode = (node, val) => {
    if (node) {
      if (val < node.val) {
        return searchBSTNode(node.left, val);
      } else if (val > node.val) {
        return searchBSTNode(node.right, val);
      } else {
        return node;
      }
    }

    return null;
  };

  return searchBSTNode(root, val);
};
