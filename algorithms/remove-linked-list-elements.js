/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 移除链表元素
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 1. 递归
  let curr = head;

  if (curr) {
    curr.next = removeElements(curr.next, val);
    if (curr.val === val) {
      return curr.next;
    }
  }
  return curr;

  // 2. 迭代

  // let curr = head;
  // let prev = null;

  // while (curr) {
  //   if (curr.val === val) {
  //     if (curr === head) {
  //       head = head.next;
  //     } else {
  //       prev.next = curr.next;
  //     }
  //   } else {
  //     prev = curr;
  //   }
  //   curr = curr.next;
  // }

  // return head;
};
