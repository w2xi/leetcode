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

  // 2. 双指针

  // let temp = null; // 保存 curr 的下一个节点
  // let prev = null;
  // let curr = head;

  // while (curr) {
  //   temp = curr.next;
  //   curr.next = prev;
  //   prev = curr;
  //   curr = temp;
  // }

  // return prev;
};
