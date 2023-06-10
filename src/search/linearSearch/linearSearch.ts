// Linear Search

// Time Complexity: O(N)
// ( In the best case, the key might be present at the first index: O(1) )

// Auxiliary Space: O(1)

// 1. for loop


function linearSearch(
  array: number[] | string[],
  value: number | string
): string {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return `Item ${i} has been found.`; // returns index numer
    }
  }
  return `Item of ${value} not found.`;
}

// Recursive approach
function LSrec(
  array: number[] | string[],
  size: number,
  element: number | string
): number {
  if (size == 0) {
    return -1;
  } else if (array[size - 1] == element) {
    // Return the index of found key.
    return size - 1;
  } else {
    let result = LSrec(array, size - 1, element);
    return result;
  }
};

// console.log(LSrec(array, array.length, 8)); // 3

export {linearSearch, LSrec};