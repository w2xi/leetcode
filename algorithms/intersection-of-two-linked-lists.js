/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 相交链表
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 思路: 让 headA 和 headB 从同一起点出来, 开始移动, 结果 相交或不相交
  // 这种方式更好理解

  if (!headA || !headB) {
    return null;
  }
  const getLength = (head) => {
    let count = 0;
    let curr = head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  };
  let aLen = getLength(headA);
  let bLen = getLength(headB);
  let diff = Math.abs(aLen - bLen);

  if (aLen < bLen) {
    [headA, headB] = [headB, headA];
    [aLen, bLen] = [bLen, aLen];
  }
  while (diff--) {
    headA = headA.next;
  }
  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA;

  // if (!headA || !headB) {
  //   return null;
  // }
  // let currA = headA;
  // let currB = headB;
  // while (currA !== currB) {
  //   currA = currA ? currA.next : headB;
  //   currB = currB ? currB.next : headA;
  // }
  // return currA;
};
