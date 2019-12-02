// Write an `Array.prototype.myReject(callback)` method. Return a new array,
// which contains only the elements for which the callback returns false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the 
// built-in `Array.prototype.filter` or `Array.prototype.forEach` methods.
// ex.
// [1,2,3].myReject( (el) => el > 2 ) => [1, 2]

/*
Create a function that takes in a callback. Then create a selection array 
variable and set it to an empty array. After, iterate through the array using
'this' and pass in only the element. 

In the loop, create a conditional to test whether the callback element is false.
If it is, then push that element into the selection array created above. 

Once you have iterated through the entire array, return the selection array
variable pointer. 

*/


Array.prototype.myReject = function (callback) {
  const selection = [];

  this.myEach(el => {
    if (!callback(el)) {
      selection.push(el);
    }
  });

  return selection;
};
// console.log([1, 2, 3, 4].myReject(e => e % 2 === 0));