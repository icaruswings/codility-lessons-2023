// https://blog.exploringserverless.com/sorting-algorithms-implemented-in-typescript

import { bench } from "vitest";

const DATA = [-3, 1, 2, -2, 5, 6];

function swapTwo(list: number[], a: number, b: number) {
  [list[a], list[b]] = [list[b], list[a]];
}

function sortTwo(list: number[], a: number, b: number) {
  if (list[a] < list[b]) {
    swapTwo(list, a, b);
  }
}

function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length + i - 1; j++) {
      sortTwo(arr, j + 1, j);
    }
  }
  return arr;
}

function selectionSort(arr: number[]): number[] {
  let min: number;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      // swap min, i;
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  return arr;
}

function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      sortTwo(arr, j + 1, j);
    }
  }
  return arr;
}

function merge(list1: number[], list2: number[]): number[] {
  let merged: number[] = [],
    i: number = 0,
    j: number = 0;
  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      merged.push(list1[i]);
      i++;
    } else {
      merged.push(list2[j]);
      j++;
    }
  }
  while (i < list1.length) {
    merged.push(list1[i]);
    i++;
  }
  while (j < list2.length) {
    merged.push(list2[j]);
    j++;
  }
  return merged;
}

function mergeSort(list: number[]): number[] {
  if (list.length <= 1) return list;
  let mid = Math.floor(list.length / 2);
  let left: number[] = mergeSort(list.slice(0, mid));
  let right: number[] = mergeSort(list.slice(mid));
  return merge(left, right);
}

function getPivotIdx(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
): number {
  let swapIdx: number = start;
  let pivotValue: number = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      swapIdx++;
      swapTwo(arr, i, swapIdx);
    }
  }
  swapTwo(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
): number[] {
  if (left < right) {
    let pivotIndex = getPivotIdx(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(bubbleSort([...DATA]));
console.log(selectionSort([...DATA]));
console.log(insertionSort([...DATA]));
console.log(mergeSort([...DATA]));
console.log(quickSort([...DATA]));
console.log([...DATA].sort((a, b) => a - b));

bench(
  "Bubble Sort",
  () => {
    bubbleSort([...DATA]);
  },
  { iterations: 100_000 }
);

bench(
  "Selection Sort",
  () => {
    selectionSort([...DATA]);
  },
  { iterations: 100_000 }
);

bench(
  "Insertion Sort",
  () => {
    insertionSort([...DATA]);
  },
  { iterations: 100_000 }
);

bench(
  "Merge Sort",
  () => {
    mergeSort([...DATA]);
  },
  { iterations: 100_000 }
);

bench(
  "Quick Sort",
  () => {
    quickSort([...DATA]);
  },
  { iterations: 100_000 }
);

bench(
  "Array.sort()",
  () => {
    [...DATA].sort();
  },
  { iterations: 100_000 }
);
