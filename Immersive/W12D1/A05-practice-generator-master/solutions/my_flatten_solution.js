// Write an `Array.prototype.myFlatten()` method which flattens a
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]
// 
// The instanceof operator tests whether the prototype property of a 
// constructor appears anywhere in the prototype chain of an object.

/*
Build a function that takes in a two dimensional array and returns only a one
dimensional array.

Create a flattened array variable. Then iterate through the array using 'this' 
and forEach(), only passing in the element parameter.

Next check, if the element is an array using the 'instanceof' operator. If it
is an array, we want to concat the flattened variable array to the array 
element, calling myFlatten again to repeat the process. Then we want to save
the flattened array variable to itself.

If it is not an array, then we want to push the element into the flattened 
array variable we created above. 

After all the elements have been iterated through including the arrays using 
recursion, we want to return the flattened array using the flattened array
pointer variable. 


Note: You want to use myEach() or forEach()

*/


Array.prototype.myFlatten = function () {
  let flattened = [];

  this.forEach((el) => {
    if (el instanceof Array) {
      flattened = flattened.concat(el.myFlatten());
    } else {
      flattened.push(el);
    }
  });

  return flattened;
};
// console.log([[], 1, 2, 3, [[1, 2, 3], [1, 2]], 1].myFlatten());
  