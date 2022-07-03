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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // 一棵树是另一棵树的子树,说明:
  // (1) 要么两棵树相等
  // (2) 要么subRoot是root左树的子树
  // (3) 要么subRoot是root右树的子树

  if (!root) {
    return false;
  }
  const isSame = isSameTree(root, subRoot);

  return (
    isSame || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  );
};

// 验证是不是同一棵树
function isSameTree(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }
  if (!root2 || !root1) {
    return false;
  }
  if (root2.val !== root1.val) {
    return false;
  }

  return (
    isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
  );
}
