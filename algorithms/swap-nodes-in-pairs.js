/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let prev = dummyNode;
  let curr = head;

  while (curr && curr.next) {
    const temp = curr.next.next;
    prev.next = curr.next;
    curr.next.next = curr;
    curr.next = temp;
    prev = curr;
    curr = temp;
  }

  return dummyNode.next;
};