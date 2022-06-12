# 二叉树遍历

```javascript
// 树节点
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
```
## 前序遍历

**中左右**

```javascript
      1
    /   \
   2     3
  / \   /  \
 4   5 6    7
```

```javascript
// 递归
function preOrderTraverseRecursive(root) {
  if (root) {
    console.log(root.val);
    preOrderTraverseRecursive(root.left);
    preOrderTraverseRecursive(root.right);
  }
}

// 迭代
// 入栈 右 -> 左
// 出栈 中 -> 左 -> 右
function preOrderTraverseIterate(root) {
  const stack = [];
  stack.push(root);

  while (stack.length > 0) {
    // 出栈
    let node = stack.pop();
    console.log(node.val);
    // 入栈
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
}
```

## 中序遍历

**左中右**

```javascript
      1
    /   \
   2     3
  / \   /  \
 4   5 6    7
```

```javascript
// 递归
function inOrderTraverseRecursive(root) {
  if (root) {
    inOrderTraverseRecursive(root.left);
    console.log(root.val);
    inOrderTraverseRecursive(root.right);
  }
}

// 迭代
// 入栈 左 -> 右
// 出栈 左 -> 中 -> 右
function inOrderTraverseIterate(root) {
  const stack = [];
  let curr  = root;

  while (stack.length > 0 || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop();
    console.log(node.val);

    if (node.right) {
      curr = node.right;
    }
  }
}
```

## 后序遍历

**左右中**

```javascript
      1
    /   \
   2     3
  / \   /  \
 4   5 6    7
```

```javascript
// 递归
function postOrderTraverseRecursive(root) {
  if (root) {
    postOrderTraverseRecursive(root.left);
    postOrderTraverseRecursive(root.right);
    console.log(root.val);
  }
}

// 迭代
// 入栈 左 -> 右
// 出栈 中 -> 右 -> 左 结果翻转 (左右中)
function postOrderTraverseIterate(root) {
  const result = [];
  const stack = [];
  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return result.reverse();
}
```

## 层序遍历

```javascript
      1
    /   \
   2     3
  / \   /  \
 4   5 6    7
```

```javascript
// 递归 (DFS)
function levelOrderTraverse(root) {
  const result = [];
  const levelOrderTraverseNode = (node, level = 0) => {
    if (node) {
      if (!result[level]) result[level] = [];
      result[level].push(node.val);

      levelOrderTraverseNode(node.left, level + 1);
      levelOrderTraverseNode(node.right, level + 1);
    }
  }
  levelOrderTraverseNode(root);

  return result;
}

// 迭代 (BFS)
function levelOrderTraverseIterate(root) {
  const result = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const temp = [];
    let size = queue.length;

    while (size--) {
      const node = queue.shift();
      temp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(temp);
  }

  return result;
}
```