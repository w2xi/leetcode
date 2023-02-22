/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1305. 两棵二叉搜索树中的所有元素
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  // 中序遍历二叉搜索树 <=> 遍历有序数组 <=> 合并两个有序数组 ( 类似的题目做过好几个了 )
  const arr1 = [];
  const arr2 = [];
  const dfs = (root, arr) => {
    if (root) {
      dfs(root.left, arr);
      arr.push(root.val);
      dfs(root.right, arr);
    }
  };
  dfs(root1, arr1);
  dfs(root2, arr2);

  return merge(arr1, arr2);
};

function merge(arr1, arr2) {
  const result = [];
  let left1 = 0;
  let left2 = 0;

  while (left1 < arr1.length && left2 < arr2.length) {
    if (arr1[left1] < arr2[left2]) {
      result.push(arr1[left1]);
      left1++;
    } else {
      result.push(arr2[left2]);
      left2++;
    }
  }
  if (left1 >= arr1.length) {
    result.push(...arr2.slice(left2));
  } else {
    result.push(...arr1.slice(left1));
  }

  return result;
}
