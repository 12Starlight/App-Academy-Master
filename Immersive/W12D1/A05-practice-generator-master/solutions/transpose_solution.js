// Write a function `transpose(arr)` that returns a 2d array transposed.
// e.g. transpose([[1,2],[3,4],[5,6]]) => [[1,3,5],[2,4,6]]

/*
We are basically changing the data set from streaming in order via rows to 
show up in order of columns. 

Create a function that takes in a two dimensional array. Then create a 
transposedArr array variable. Then loop through the first array (col) and set
col = 0, then make sure to set your conditional to col < arr[0]. After you have
set your loop, create a transposedRow array variable and set it to an empty 
array.

Then create your second loop, setting row = 0 and the conditional to row <
arr.length. Inside the loop take your transposedRow array variable that you 
created earlier and push the arr elements in reverse order:
  transposedRow.push(arr[row][col]);

Once you have pushed the arr elements in reverse order by switching the index's
you want to push the transposedRow array variable into the transposedArr array
variable we created earlier.

Lastly, you want to return outside of both loops, the transposedArr array 
pointer variable.

*/

function transpose(arr) {
  const transposedArr = [];

  for (var col = 0; col < arr[0].length; col++) {
    const transposedRow = [];
    for (var row = 0; row < arr.length; row++) {
      transposedRow.push(arr[row][col]);
    }
    transposedArr.push(transposedRow);
  }
  return transposedArr;
};
console.log(transpose([[1, 2], [3, 4], [5, 6]])); // => [[1, 3, 5], [2, 4, 6]]) 