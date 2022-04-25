class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  has(value){
    let current = this.head

    while (current) {
      if (current.value === value) {
        return true
      }

      current = current.next
    }

    return false
  }

  remove(value){
    let current = this.head
    let pre = null

    const hasValue = this.has(value)

    if (hasValue) {
      while (current) {
        if (current.value === value) {
          // 如果被删除的节点是头部节点
          if (current === this.head) {
            this.head = current.next
          } else {
            pre.next = current.next
          }

          // 置空
          current.next = null
        }

        // 指向上一个节点
        pre = current
        current = current.next
      }

      return value
    }
  }

  getLength(){
    let current = this.head
    let count = 0

    while (current) {
      current = current.next
      count++
    }

    return count
  }
}

const linked = new LinkedList()

linked.add(1)
linked.add(2)
linked.add(3)
linked.add(4)

console.log(linked.has(4))    // true 
console.log(linked.remove(4)) // 4
console.log(linked.has(4))    // false 
console.log(linked.getLength()) // 3

