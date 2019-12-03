// Insertion Sort JS Implementation
const InsertionSort = (arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    let currElement = arr[i];
    for (var j = i - 1; j >= 0 && currElement < arr[j]; j -= 1) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currElement;
  }

  return arr; 
}

// Commented
// const InsertionSort = (arr) => { 

     /* 
      the `i` loop will iterate through every element of the array
      we begin at i = 1, because we can consider the first element of the array
      as a trivially sorted region of only on element
      insertion sort allows us to insert new elements anywhere within the 
      sorted region
     */

//   for (let i = 1; i < arr.length; i += 1) {
       // grab the first element of the unsorted region
//     let currElement = arr[i];

       /*
        the `j` loop will iterate left through the sorted region, looking for 
        a legal spot to insert currElement
       */  
//     for (var j = i - 1; j >= 0 && currElement < arr[j]; j -= 1) {
         // keep moving left while currElement is less than the j-th element
         
//       arr[j + 1] = arr[j];
         /*
          the line above will move the j-th element to the right, leaving a gap
          to potentially insert currElement
         */
//     }

       // insert currElement into that gap
//     arr[j + 1] = currElement;
//   }

//   return arr;
// }