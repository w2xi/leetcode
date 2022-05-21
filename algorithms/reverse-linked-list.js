/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 * @example
 * 
 * Input: 1->2->3->4->5
 * Output: 5->4->3->2->1
 */
var reverseList = function (head) {
  // 1. 递归
  const reverseNode = (curr, prev) => {
    if (curr) {
      const next = curr.next;
      curr.next = prev;
      return reverseNode(next, curr);
    } else {
      return prev;
    }
  };
  return reverseNode(head, null);

  // 2. 迭代

  // let prev = null;
  // let curr = head;

  // while (curr) {
  //   let next = curr.next;
  //   curr.next = prev;
  //   prev = curr;
  //   curr = next;
  // }

  // return prev;
};
