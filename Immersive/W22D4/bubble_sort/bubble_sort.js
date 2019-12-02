// Swapping Elements
const swap = (array, idx1, idx2) => {
  let temp = array[idx1]; // save a copy of the first ele
  array[idx1] = array[idx2]; // overwrite the first ele with the second ele
  array[idx2] = temp; // overwrite the second ele with the first ele copy
}

// Note: The function does not return a new array, it mutates the old one. 
let arr1 = [2, 8, 5, 2, 6];
swap(arr1, 1, 2);
arr1; // => [2, 5, 8, 2, 6]


// Putting it all together
const bubbleSort = (arr) => {
  let swapped = true;

  while(swapped) {
    swapped = false;

    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  }

  return array; 
}

// Commented
// const bubbleSort = (arr) => {
//   let swapped = true; // this variable will be used to track whether or not we
                         // made a swap on the previous pass. If we did not make
                         // any swap on the previous pass, then the array must 
                         // already be sorted

     // this while will keep doing passes, if a swap was made on the previous pass
//   while (swapped) {
//     swapped = false; // reset to swap to false

       // this for will perform a single pass
//     for (let i = 0; i < array.length - 1; i += 1) {
//       if (array[i] > array[i + 1]) {  // if the two eles are not ordered ...
//         swap(array, i, i + 1); // sswap them
//         swapped = true; // se we made a swap, remember that we did so
                           // bc we should perform another pass after this one
//       }
//     }
//   }

//   return array;
}