/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 单调队列
  const deque = new Deque();
  const result = [];

  // 先将前 k 个元素放进队列
  for (let i = 0; i < k; i++) {
    deque.push(nums[i]);
  }
  // 记录前 k 个元素的最大值
  result.push(deque.front());

  for (let i = k; i < nums.length; i++) {
    const curr = nums[i];
    // 滑动窗口移除最前面元素
    deque.pop(nums[i - k]);
    // 滑动窗口前加入最后面的元素
    deque.push(curr);
    // 记录对应的最大值
    result.push(deque.front());
  }

  return result;
};

/**
 * 单调队列 (递减)
 */
class Deque {
  constructor() {
    this.queue = [];
  }

  push(val) {
    if (this.queue.length === 0) {
      this.queue.push(val);
    } else {
      while (this.queue.length > 0 && val > this.queue.at(-1)) {
        this.queue.pop();
      }
      this.queue.push(val);
    }
  }

  pop(val) {
    if (val === this.front()) {
      this.queue.shift();
    }
  }

  front() {
    return this.queue[0];
  }
}
