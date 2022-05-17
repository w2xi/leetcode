/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 删除排序链表中的重复元素 II (迭代 + Dummy Node)
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let curr = head;
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let prev = dummyNode;

  while (curr && curr.next) {
    let tmp = curr;

    // 找到最后一个重复的元素
    while (tmp && tmp.next) {
      if (tmp.val === tmp.next.val) {
        tmp = tmp.next;
      } else {
        break;
      }
    }

    if (tmp !== curr) {
      curr = tmp.next;
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return dummyNode.next;
};
