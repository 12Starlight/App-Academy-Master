// Write an `Array.prototype.quickSort(callback)` method that quick sorts an array.
// It should take an optional callback that compares two elements, returning -1 
// if the first element should appear before the second, 0 if they are equal, and
// 1 if the first element should appear after the second. Do NOT call the 
// built-in Array.prototype.sort method in your implementation.
//
// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the 
// remaining elements on to the appropriate side of the pivot. Recursively quick 
// sort each side of the array until a base case is reached. 

/*
Create a recursive function that takes a callback. Then create a conditional to
test, if the length of the array is less than 2. If it is return the array
using 'this'.

Next create a conditional to test, if the callback exists. If it does not exist,
then create a callback passing in x and y. If x < y, return -1. If x > y, 
return 1.

After you have created your callback, create a pivot variable and set it to the
first element of the array using 'this'.

Then create a left array variable and set it to the rest of the elements except
the first element using 'slice(1)' after, use filter and pass in a callback 
function. 
  (el => func(el, pivot) === -1)

Then create a right array variable and set it to the array minus the first 
element using .slice(1), use .filter and pass in a callback function.
  (el => func(el, pivot) !== -1)

After you have created a left array variable, use it to call quickSort on it 
and pass in the func parameter. Then use the right array variable to call 
quickSort on it and pass in the func parameter. Both the right and the left 
will continue this process until their length is less than 2.

Once both the left and the right have an array length of less than 2, we want
to concat the left with the pivit and concat that to the right array and return
the result.  

*/


Array.prototype.quickSort = function (func) {
  if (this.length < 2) return this;

  if (!func) {
    func = (x, y) => {
      if (x < y) return - 1;
      return 1;
    };
  }

  const pivot = this[0];
  let left = this.slice(1).filter((el) => func(el, pivot) === -1);
  let right = this.slice(1).filter((el) => func(el, pivot) !== -1);
  left = left.quickSort(func);
  right = right.quickSort(func);

  return left.concat([pivot]).concat(right);
};
// console.log([1, 4, 5, 9, 43, 9, 1, 34].quickSort());