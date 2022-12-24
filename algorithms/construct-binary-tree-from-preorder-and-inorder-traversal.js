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

function buildTree2(preorder, inorder) {
  // preorder: [3,9,20,15,7] 中左右
  // inorder:  [9,3,15,20,7] 左中右
  
  const helper = (preorder, inorder, preStart, preEnd, inStart, inEnd) => {
    if (preStart === preEnd) return null;

    const val = preorder[preStart];
    // 根节点
    const node = new TreeNode(val);
    if (preEnd - preStart === 1) return node;
    // 切割点
    const index = inorder.indexOf(val, inStart);
    // 切割中序数组 (左闭右开)
    const leftInStart = inStart;
    const leftInEnd = index;
    const rightInStart = index + 1;
    const rightInEnd = inEnd;
    // 切割前序数组
    const leftPreStart = preStart + 1; // 排除第一个元素
    const leftPreEnd = preStart + 1 + index - inStart;
    const rightPreStart = leftPreEnd;
    const rightPreEnd = preEnd;

    node.left = helper(
      preorder,
      inorder,
      leftPreStart,
      leftPreEnd,
      leftInStart,
      leftInEnd
    );
    node.right = helper(
      preorder,
      inorder,
      rightPreStart,
      rightPreEnd,
      rightInStart,
      rightInEnd
    );
    return node;
  };
  return helper(preorder, inorder, 0, preorder.length, 0, inorder.length);
}
