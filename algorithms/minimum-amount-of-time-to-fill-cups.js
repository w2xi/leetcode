/**
 * 2335. 装满杯子需要的最短总时长
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  let count = 0;
  // 大顶堆
  const maxHeap = new MaxHeap();

  for (let i = 0; i < amount.length; i++) {
    maxHeap.push(amount[i]);
  }
  while (true) {
    const first = maxHeap.pop();
    const second = maxHeap.pop();

    if (second === 0) {
      count += first;
      break;
    }
    count++;
    maxHeap.push(first - 1);
    maxHeap.push(second - 1);
  }

  return count;
};

/**
 * 优先队列 - 堆
 * 对外暴露接口:
 *  - push: 向队尾添加元素
 *  - pop:  从队头取出元素
 */
class MaxHeap {
  constructor() {
    this.queue = [];
  }

  push(item) {
    this.queue.push(item);
    // 上移
    this.siftUp(this.size() - 1);
  }

  pop() {
    if (this.size() === 0) {
      return;
    }
    if (this.size() === 1) {
      return this.queue.pop();
    }
    const removedItem = this.queue[0];
    this.queue[0] = this.queue.pop();
    // 下沉
    this.siftDown(0);

    return removedItem;
  }

  // 上移
  siftUp(index) {
    const parent = index === 0 ? null : (index - 1) >> 1;

    if (index > 0 && this.queue[index] > this.queue[parent]) {
      swap(this.queue, index, parent);
      this.siftUp(parent);
    }
  }

  // 下沉
  siftDown(index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    const size = this.size();
    let last = index;

    if (left < size && this.queue[left] > this.queue[last]) {
      last = left;
    }
    if (right < size && this.queue[right] > this.queue[last]) {
      last = right;
    }

    if (last !== index) {
      swap(this.queue, index, last);
      this.siftDown(last);
    }
  }

  size() {
    return this.queue.length;
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
