
// Binary Search
// Required sorted array.

// Time complexity: O(Log n)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1;
  let mid;
  while (end >= start) {
    mid = start + Math.floor((end - start) / 2);

    // If the element is present at the middle itself, return it
    if (array[mid] == element) return `Element ${mid} has been found !`;
    // If element is smaller than mid, then it can only be present in left subarray
    if (array[mid] > element) end = mid - 1;
    // Else the element can only be present in right subarray
    else start = mid + 1;
  }
  // We reach here when element is not present in array
  return `There is no element in array with value of ${element}`;
}

console.log(binarySearch(array, 9));
console.log(binarySearch(array, 40));


function binarySearchRecursive(array, element, start = 0, end = array.length - 1) {
  const mid = Math.floor(start + (end - start) / 2)

  if (end >= start) {
    // item found => return its index
    if (array[mid] === element) return `Element ${mid} has been found !`;
      
    if (element < array[mid]) {
      // array[mid] is an upper bound for element, 
      // so if element is in array => start <= element < mid
      return binarySearchRecursive(array, element, start, mid - 1)
    } else {
      // array[mid] is a lower bound for element, 
      // so if element is in array => mid < element <= end
      return binarySearchRecursive(array, element, mid + 1, end)
    }
  } else {
    // if start > end => we have searched the whole array without finding the item
    return `There is no element in array with value of ${element}`;
  }
}

binarySearchRecursive(array, 9);
binarySearchRecursive(array, 40);