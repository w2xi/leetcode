/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // Reference:
  // https://leetcode.cn/problems/sort-an-array/solution/fu-xi-ji-chu-pai-xu-suan-fa-java-by-liweiwei1419/

  // 归并排序
  return mergeSort(nums);
  // 堆排序
  // return heapSort(nums)
  // 捅排序 (整数排序，处理密集整数非常高效)
  // return bucketSort(nums);
  // 选择排序
  // return selectionSort(nums);
  // 计数排序
  // return countingSort(nums);
  // 冒泡排序
  // return bubbleSort(nums);
  // 插入排序
  // return insertionSort(nums);

  // 归并排序 (分而治之)
  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }
  function merge(left, right) {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  // 快速排序
  function quickSort(array) {}

  // 计数排序
  function countingSort(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    const countArr = Array(max - min + 1).fill(0);
    for (let i = 0; i < array.length; i++) {
      countArr[array[i] - min]++;
    }
    let index = 0;
    for (let i = 0; i < countArr.length; i++) {
      while (countArr[i] > 0) {
        array[index] = i + min;
        countArr[i]--;
        index++;
      }
    }
    return array;
  }

  // 捅排序
  function bucketSort(array, bucketSize = 5) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    // 捅大小
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    // 初始化捅
    const buckets = Array.from({ length: bucketCount }, () => []);
    // 排序
    for (let i = 0; i < array.length; i++) {
      const bucketIndex = Math.floor((array[i] - min) / bucketSize);
      buckets[bucketIndex].push(array[i]);
    }
    return sortBuckets(buckets);
  }
  function sortBuckets(buckets) {
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i]) {
        insertionSort(buckets[i]);
        sortedArray.push(...buckets[i]);
      }
    }
    return sortedArray;
  }

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

  // 选择排序
  function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(array, i, minIndex);
      }
    }
    return array;
  }

  // 插入排序
  function insertionSort(array) {
    let j, curr;
    for (let i = 1; i < array.length; i++) {
      j = i;
      curr = array[i];
      while (j > 0 && curr < array[j - 1]) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = curr;
    }
    return array;
  }

  // 冒泡排序
  function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
    return array;
  }

  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
