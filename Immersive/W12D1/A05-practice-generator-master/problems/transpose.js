// Write a function `transpose(arr)` that returns a 2d array transposed.
// e.g. transpose([[1,2],[3,4],[5,6]]) => [[1,3,5],[2,4,6]]
function transpose(arr) {
  let transposeArr = [];

  for (col = 0; col < arr[0].length; col += 1) {
    let transposeRow = [];

    for (row = 0; row < arr.length; row += 1) {
      transposeRow.push(arr[row][col]);
    }

    transposeArr.push(transposeRow);
  }

  return transposeArr;
};
console.log(transpose([[1, 2], [3, 4], [5, 6]])); // => [[1, 3, 5], [2, 4, 6]])  