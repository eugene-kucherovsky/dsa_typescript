
// Linear Search

// Time Complexity: O(N)
// ( In the best case, the key might be present at the first index: O(1) )

// Auxiliary Space: O(1)



// 1. for loop
const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return `Item ${i} has been found.` ; // returns index numer
    }
  }
  return `Item of ${value} not found.`;
}

console.log(linearSearch(array, 8)); // Item 3 has been found.
console.log(linearSearch(array, 20)); // Item of 20 not found.

// 2. while loop
function linearSearch2(array, value) {
  let found = false;
  let position = -1;
  let i = 0;

  while (!found && i < array.length) {
    if (array[i] == value) {
      found = true;
      position = i;
    } else {
      i += 1;
    }
  }
  return position;
}

console.log(linearSearch2([3, 4, 2, 1, 5], 1)); // 3
console.log(linearSearch2([3, 4, 2, 1, 5], 0)); // -1


// Recursive approach
let LSrec = (array, size, element) => {
  if (size == 0) {
    return -1;
  }
  else if (array[size - 1] == element) {
   
    // Return the index of found key.
    return size - 1;
  } else {
    let result = LSrec(array, size - 1, element);
    return result;
  }
};

console.log(LSrec(array, array.length, 8)); // 3