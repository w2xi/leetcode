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
  // inorder:   [9,3,15,20,7] 左中右
  // postorder: [9,15,7,20,3] 左右中

  // 比较好理解, 但是需要耗费额外的存储空间, 性能较差

  // 终止条件
  if (inorder.length === 0) return null;

  const val = postorder.pop();
  // 根节点
  const root = new TreeNode(val);
  // 切割点
  const index = inorder.indexOf(val);
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

// 原地切割, 无需产生额外的空间, 比较不好理解
function buildTree2(inorder, postorder) {
  // inorder:   [9,3,15,20,7] 左中右
  // postorder: [9,15,7,20,3] 左右中

  const helper = (inorder, postorder, inStart, inEnd, postStart, postEnd) => {
    // 终止条件
    if (postStart === postEnd) return null;
    const val = postorder[postEnd - 1];
    // 根节点
    const node = new TreeNode(val);
    if (postEnd - postStart === 1) return node;
    // 切割点
    const index = inorder.indexOf(val, inStart);
    // 切割中序数组
    const leftInStart = inStart;
    const leftInEnd = index;
    const rightInStart = index + 1;
    const rightInEnd = inEnd;
    // 切割后序数组
    const leftPostStart = postStart;
    const leftPostEnd = postStart + index - inStart;
    const rightPostStart = leftPostEnd;
    const rightPostEnd = postEnd - 1; // 排除最后一个元素

    node.left = helper(
      inorder,
      postorder,
      leftInStart,
      leftInEnd,
      leftPostStart,
      leftPostEnd
    );
    node.right = helper(
      inorder,
      postorder,
      rightInStart,
      rightInEnd,
      rightPostStart,
      rightPostEnd
    );
    return node;
  };
  return helper(inorder, postorder, 0, inorder.length, 0, postorder.length);
}
