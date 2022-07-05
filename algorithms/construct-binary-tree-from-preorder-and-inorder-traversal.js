/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;
  const rootVal = preorder.shift();
  const root = new TreeNode(rootVal);
  const index = inorder.indexOf(rootVal);

  const preorderLeft = preorder.slice(0, index);
  const preorderRight = preorder.slice(index);

  const inorderLeft = inorder.slice(0, index);
  const inorderRight = inorder.slice(index + 1);

  root.left = buildTree(preorderLeft, inorderLeft);
  root.right = buildTree(preorderRight, inorderRight);

  return root;
};
