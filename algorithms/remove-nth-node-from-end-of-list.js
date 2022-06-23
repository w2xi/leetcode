/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 常规做法 计算链表长度
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let length = getLength(head);
  let curr = dummyNode;

  for (let i = 1; i < length - n + 1; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;

  return dummyNode.next;

  // 栈
  // return stackFn(head);

  // 双指针
  // return twoPointers(head);
};

// 计算链表长度
function getLength(head) {
  let curr = head;
  let length = 0;
  while (curr) {
    length++;
    curr = curr.next;
  }
  return length;
}

// 栈
function stackFn(head) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let curr = dummyNode;
  let stack = [];
  // 入栈
  while (curr) {
    stack.push(curr);
    curr = curr.next;
  }
  // 出栈
  for (let i = 0; i < n; i++) {
    stack.pop();
  }
  // 待删除节点的前置节点
  const prev = stack.at(-1);
  prev.next = prev.next.next;

  return dummyNode.next;
}

// 双指针
var twoPointers = function(head, n) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let fast = head;
  // 指向哑节点
  let slow = dummyNode;

  // 前进 n 步
  for (let i = 0; i < n; i++) {
      fast = fast.next;
  }
  while (fast) {
      fast = fast.next;
      slow = slow.next;
  }
  // 此时，slow 指向待删除节点的前驱节点
  slow.next = slow.next.next;

  return dummyNode.next;
};