/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 方法一: 哈希表 + 排序
  // 时间复杂度: O(n log n)

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    map.set(curr, (map.get(curr) || 0) + 1);
  }

  // return Array.from(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0]);

  // 方法二: 堆(优先队列)
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
