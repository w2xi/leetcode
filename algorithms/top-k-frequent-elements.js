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
  const temp = Array.from(map);
  buildMinHeap(temp);

  while (temp.length > k) {
    swap(temp, 0, temp.length - 1);
    temp.pop();
    heapify(temp, 0, temp.length);
  }

  return temp.map((item) => item[0]);
};

function buildMinHeap(array) {
  const size = array.length;
  for (let i = size >> 1; i >= 0; i--) {
    heapify(array, i, size);
  }
}

// 堆化 (下移)
function heapify(array, index, heapSize) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;

  if (left < heapSize && array[left][1] < array[largest][1]) {
    largest = left;
  }
  if (right < heapSize && array[right][1] < array[largest][1]) {
    largest = right;
  }
  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


function solution(nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    map.set(curr, (map.get(curr) || 0) + 1);
  }

  // 小顶堆
  const heap = new PrioQueue((a, b) => a[1] - b[1]);

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
}

/**
 * 优先队列 - 堆
 * 对外暴露接口: 
 *  - push: 向队尾添加元素
 *  - pop:  从队头取出元素
 */
class PrioQueue {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.queue = [];
  }

  push(item) {
    if (item) {
      this.queue.push(item);
      // 执行上移操作
      this.shiftUp(this.size() - 1);
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
    // 执行上移操作
    this.shiftUp(0);

    return removedValue;
  }

  // 上移操作
  shiftUp(index) {
    const parentIndex = index === 0 ? null : (index - 1) >> 1;
    const parentValue = this.queue[parentIndex];
    const currValue = this.queue[index];

    if (index > 0 && this.compareFn(currValue, parentValue) < 0) {
      swap(this.queue, index, parentIndex);
      // 继续执行上移操作
      this.shiftUp(parentIndex);
    }
  }

  size() {
    return this.queue.length;
  }
}