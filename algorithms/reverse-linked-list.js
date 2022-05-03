// 常规解法

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
var reverseList = function (head) {
  let hNode;
  
  while (head) {
    hNode = new ListNode(head.val, hNode);

    head = head.next;
  }

  return hNode || head;
};

// 迭代法

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
 var reverseList = function(head) {
  let prev = null;
  let curr = head

  while (curr) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
  }

  return prev
};
