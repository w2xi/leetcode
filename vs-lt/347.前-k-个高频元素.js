/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    map.set(curr, (map.get(curr) || 0) + 1);
  }

  // 优先队列 (小顶堆)
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

class MinHeap {
  constructor() {
    this.queue = [];
  }

  push(item) {
    if (item) {
      this.queue.push(item);
      // 执行上移操作
      this.siftUp(this.size() - 1);
    }
  }

  pop() {
    if (this.size() === 0) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.queue.pop();
    }
    // 被移除值(堆顶)
    const removedValue = this.queue[0];
    // 弹出队列尾部的元素, 放到队头
    this.queue[0] = this.queue.pop();
    // 执行下沉操作
    this.siftDown(0);

    return removedValue;
  }

  // 上移操作
  siftUp(index) {
    const parentIndex = index === 0 ? null : (index - 1) >> 1;
    const parentValue = this.queue[parentIndex];
    const currValue = this.queue[index];

    if (index > 0 && currValue[1] < parentValue[1]) {
      swap(this.queue, index, parentIndex);
      // 继续执行上移操作
      this.siftUp(parentIndex);
    }
  }

  // 下移
  siftDown(index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    const size = this.size();
    let largest = index;

    if (left < size && this.queue[left][1] < this.queue[largest][1]) {
      largest = left;
    }
    if (right < size && this.queue[right][1] < this.queue[largest][1]) {
      largest = right;
    }

    if (largest !== index) {
      swap(this.queue, index, largest);
      this.siftDown(largest);
    }
  }

  size() {
    return this.queue.length;
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
// @lc code=end