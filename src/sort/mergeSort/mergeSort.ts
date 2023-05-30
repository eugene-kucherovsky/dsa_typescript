// Merge Sort Algorithm
// Difficulty Level : Medium

// Time Complexity: O(n log n)
// Space Complexity: O(n)

function merge(left: string[] | number[], right: string[] | number[]) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

function mergeSort(arr: string[] | number[]): any {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

export { mergeSort };
