/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


// ----- 方法一(最佳) ------- //

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head, tail
  // 表示进位
  let carry = 0

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const sum = n1 + n2 + carry

    carry = Math.floor(sum / 10)

    // 当前数值
    const curr = sum % 10

    if (!head) {
      head = tail = new ListNode(curr)
    } else {
      tail.next = new ListNode(curr)
      tail = tail.next
    }

    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  // 如果最后的进位大于0
  if (carry > 0) {
    tail.next = new ListNode(carry)
  }

  return head
};



// ----- 方法二 (BigInt取巧) ------- //

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let aResult = [], bResult = []

  while (l1 || l2) {
    if (l1) {
      aResult.push(l1.val)
      l1 = l1.next
    }
    if (l2) {
      bResult.push(l2.val)
      l2 = l2.next
    }
  }

  aResult = BigInt(aResult.reverse().join(''))
  bResult = BigInt(bResult.reverse().join(''))

  let sum = aResult + bResult
  let head = null

  if (sum === 0) {
    return new ListNode(sum)
  }

  sum.toString().split('').forEach(num => {
    num = Number(num)

    if (!head) {
      head = new ListNode(num)
    } else {
      head = new ListNode(num, head)
    }
  })

  return head
};