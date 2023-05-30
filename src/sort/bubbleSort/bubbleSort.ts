// Bubble Sort
// Time complexity: O(n²) - not efficient algorithm

// basic version
function bubbleSort(arr: any) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  return arr;
};

function bubbleSortDescending(arr: any) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        const swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  return arr;
};

export { bubbleSort, bubbleSortDescending };


// optimized version
// with already sorted array checker
// function bubble2(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let wasSwap = false;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let swap = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = swap;
//         wasSwap = true;
//       }
//     }
//     if (!wasSwap) break;
//   }
//   return arr;
// };

// ES6 syntax
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let wasSwap = false;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         wasSwap = true;
//       }
//     }
//     if (!wasSwap) break;
//   }
//   return arr;
// };