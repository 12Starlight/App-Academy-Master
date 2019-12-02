// Finding the Minimum Value
const minimumValueIndex = (arr) => {
  let minIndex = 0;

  for (let j = 0; j < arr.length; j += 1) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }

  return minIndex;
}

// swap helper method
const swap = (arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// Putting it all together
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    swap(arr, i , minIndex);
  }

  return arr;
}


// Commented
// const selectionSort = (arr) => {

     /*  
      the 'i' loop will track the index that points to the first element of the
      unsorted region: 
        this means that the sorted region is everything left of index i 
        and the unsorted region is everything to the right of index i
     */ 

//   for (let i = 0; i < arr.length; i += 1) {
//     let minIndex = i;

       // the 'j' loop will iterate through the unsorted region and find the index
       // of the smallest element
//     for (let j = i + 1; j < arr.length; j += 1) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }

       // after we find the inIndex in the unsorted region,
       // swap that minIndex with the first index of the unsorted region
//     swap(arr, i, minIndex);
//   }

//   return arr;
// }