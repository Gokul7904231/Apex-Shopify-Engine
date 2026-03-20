// ============================================================
// Custom Sorting Algorithms
// ============================================================
// Implementations of merge sort and quick sort with configurable
// comparators for multi-key ranking of search results.
//
// Merge Sort: O(N log N) time, O(N) space — stable sort
// Quick Sort: O(N log N) avg, O(N²) worst — in-place
//
// Both accept generic comparator functions for flexible sorting
// by price, stock, relevancy, or any combination.
// ============================================================

type Comparator<T> = (a: T, b: T) => number;

/**
 * Merge Sort — Stable O(N log N) sort.
 * Preserves relative order of equal elements.
 * Best for: consistent ordering, linked-list-style data, when stability matters.
 */
export function mergeSort<T>(arr: T[], comparator: Comparator<T>): T[] {
  if (arr.length <= 1) return [...arr];

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), comparator);
  const right = mergeSort(arr.slice(mid), comparator);

  return merge(left, right, comparator);
}

function merge<T>(left: T[], right: T[], comparator: Comparator<T>): T[] {
  const result: T[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (comparator(left[i], right[j]) <= 0) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

/**
 * Quick Sort — In-place O(N log N) average sort.
 * Uses median-of-three pivot selection to avoid worst-case O(N²).
 * Best for: arrays, when space efficiency matters.
 */
export function quickSort<T>(arr: T[], comparator: Comparator<T>): T[] {
  const result = [...arr];
  quickSortInPlace(result, 0, result.length - 1, comparator);
  return result;
}

function quickSortInPlace<T>(arr: T[], low: number, high: number, comparator: Comparator<T>): void {
  if (low >= high) return;

  // Use insertion sort for small subarrays (optimization)
  if (high - low < 10) {
    insertionSort(arr, low, high, comparator);
    return;
  }

  const pivotIndex = partition(arr, low, high, comparator);
  quickSortInPlace(arr, low, pivotIndex - 1, comparator);
  quickSortInPlace(arr, pivotIndex + 1, high, comparator);
}

function partition<T>(arr: T[], low: number, high: number, comparator: Comparator<T>): number {
  // Median-of-three pivot selection
  const mid = Math.floor((low + high) / 2);
  if (comparator(arr[low], arr[mid]) > 0) [arr[low], arr[mid]] = [arr[mid], arr[low]];
  if (comparator(arr[low], arr[high]) > 0) [arr[low], arr[high]] = [arr[high], arr[low]];
  if (comparator(arr[mid], arr[high]) > 0) [arr[mid], arr[high]] = [arr[high], arr[mid]];

  // Use mid as pivot
  [arr[mid], arr[high - 1 > mid ? high - 1 : high]] = [arr[high - 1 > mid ? high - 1 : high], arr[mid]];
  const pivot = arr[high - 1 > low ? high - 1 : high];
  const pivotPos = high - 1 > low ? high - 1 : high;

  let i = low;
  let j = pivotPos - 1;

  while (i <= j) {
    while (i <= j && comparator(arr[i], pivot) < 0) i++;
    while (i <= j && comparator(arr[j], pivot) > 0) j--;
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  [arr[i], arr[pivotPos]] = [arr[pivotPos], arr[i]];
  return i;
}

function insertionSort<T>(arr: T[], low: number, high: number, comparator: Comparator<T>): void {
  for (let i = low + 1; i <= high; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= low && comparator(arr[j], key) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

// ============================================================
// Pre-built comparators for product sorting
// ============================================================

export interface SortableProduct {
  title: string;
  price: number;
  inventory: number;
  createdAt: string;
  relevancyScore?: number;
}

export const ProductComparators = {
  byPriceAsc: (a: SortableProduct, b: SortableProduct) => a.price - b.price,
  byPriceDesc: (a: SortableProduct, b: SortableProduct) => b.price - a.price,
  byStockAsc: (a: SortableProduct, b: SortableProduct) => a.inventory - b.inventory,
  byStockDesc: (a: SortableProduct, b: SortableProduct) => b.inventory - a.inventory,
  byTitleAsc: (a: SortableProduct, b: SortableProduct) => a.title.localeCompare(b.title),
  byTitleDesc: (a: SortableProduct, b: SortableProduct) => b.title.localeCompare(a.title),
  byNewest: (a: SortableProduct, b: SortableProduct) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  byRelevancy: (a: SortableProduct, b: SortableProduct) =>
    (b.relevancyScore || 0) - (a.relevancyScore || 0),

  /**
   * Create a multi-key comparator that sorts by multiple criteria.
   * Falls through to the next comparator when values are equal.
   */
  multiKey:
    (...comparators: Comparator<SortableProduct>[]) =>
    (a: SortableProduct, b: SortableProduct): number => {
      for (const cmp of comparators) {
        const result = cmp(a, b);
        if (result !== 0) return result;
      }
      return 0;
    },
};
