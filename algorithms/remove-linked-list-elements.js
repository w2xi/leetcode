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
  // 1. 迭代-方式一 (更好理解) (dummy node)

  let dummyNode = new ListNode(0, head);
  let curr = dummyNode;

  while (curr.next) {
    if (val === curr.next.val) {
      curr.next = curr.next.next;
      continue;
    }
    curr = curr.next;
  }

  return dummyNode.next;

  // 2. 迭代-方式二 (dummy node)

  // let curr = head;
  // let dummyNode = new ListNode(-1);
  // dummyNode.next = head;
  // let prev = dummyNode;

  // while (curr) {
  //   if (curr.val === val) {
  //     prev.next = curr.next;
  //   } else {
  //     prev = curr;
  //   }
  //   curr = curr.next;
  // }

  // return dummyNode.next;

  // 3. 递归

  // let curr = head;

  // if (curr) {
  //   curr.next = removeElements(curr.next, val);
  //   if (curr.val === val) {
  //     return curr.next;
  //   }
  // }
  // return curr;
};
