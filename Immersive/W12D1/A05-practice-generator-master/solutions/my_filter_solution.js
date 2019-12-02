// Write an `Array.prototype.myFilter(callback)` that takes a callback and
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach` 
// methods.

/*
The filter() method creates a new array with all elements that pass the test 
implemented by the provided function.


Create a function that takes a callback. Then iterate through the array and 
create a conditional that tests whether the element passes the conditional with
that callback. If it does, we want to push only these elements into a new array.

After all the elements have been pushed into the new array, we want to return
the new array.

*/


Array.prototype.myFilter = function (callback) {
  const result = [];

  this.myEach((el) => {
    if (callback(el)) result.push(el)
  });
  
  return result;
};
// console.log([1, 2, 3, 4].myFilter(e => e % 2 === 0));
