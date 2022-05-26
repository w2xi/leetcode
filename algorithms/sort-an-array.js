/** 排序数组
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // 堆排序
  function heapSort(array) {
    let heapSize = array.length;
    buildMaxHeap(array);
    while (heapSize > 1) {
      swap(array, 0, --heapSize);
      heapify(array, 0, heapSize);
    }
    return array;
  }
  function buildMaxHeap(array) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, i, array.length);
    }
  }
  // 堆化
  function heapify(array, index, heapSize) {
    let largest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if (left < heapSize && array[index] < array[left]) {
      largest = left;
    }
    if (right < heapSize && array[largest] < array[right]) {
      largest = right;
    }
    if (index !== largest) {
      swap(array, index, largest);
      heapify(array, largest, heapSize);
    }
  }
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return heapSort(nums);
};
