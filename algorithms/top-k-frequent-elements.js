/**
 * 347. 前 K 个高频元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 方法一: 哈希表 + 快速排序 (nlogn)
  // 时间复杂度: O(n log n)

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    map.set(curr, (map.get(curr) || 0) + 1);
  }

  // return Array.from(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0]);

  // 方法二: 优先队列 (堆)
  // 时间复杂度: O(n log k)
  const heap = new MinHeap();

  for (const item of map.entries()) {
    heap.push(item);
    if (heap.size() > k) {
      heap.pop();
    }
  }

  const result = [];

  for (let i = heap.size() - 1; i >= 0; i--) {
    const item = heap.pop();
    result.push(item[0]);
  }

  return result;

};

/**
 * 优先队列 - 堆
 * 对外暴露接口: 
 *  - push: 向队尾添加元素
 *  - pop:  从队头取出元素
 */
class MinHeap {
  constructor() {
    this.queue = [];
  }

  push(item) {
    if (item) {
      this.queue.push(item);
      // 上移
      this.siftUp(this.size() - 1);
    }
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

    if (index > 0 && this.queue[index][1] < this.queue[parent][1]) {
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

    if (left < size && this.queue[left][1] < this.queue[last][1]) {
      last = left;
    }
    if (right < size && this.queue[right][1] < this.queue[last][1]) {
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