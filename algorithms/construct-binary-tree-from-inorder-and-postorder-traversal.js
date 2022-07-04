/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // [9,3,15,20,7] inorder
  // [9,15,7,20,3] postorder

  // 终止条件
  if (inorder.length === 0) return null;

  const rootVal = postorder.pop();
  // 根节点
  const root = new TreeNode(rootVal);
  // 切割点
  const index = inorder.indexOf(rootVal);
  // 切割中序
  const inorderLeft = inorder.slice(0, index);
  const inorderRight = inorder.slice(index + 1);
  // 切割后序
  const postorderLeft = postorder.slice(0, index);
  const postorderRight = postorder.slice(index);

  root.left = buildTree(inorderLeft, postorderLeft);
  root.right = buildTree(inorderRight, postorderRight);

  return root;
};
