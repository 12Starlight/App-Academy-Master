// Write an `Array.prototype.mySome(callback)` method which takes a callback
// and returns true if the callback returns true for ANY element in the array. 
// Otherwise, return false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the
// built-in `Array.prototype.some` or `Array.prototype.forEach` methods.

/*
Create a function that passes in a callback. Then create a some logic variable 
and set it to false. 

After you have created your some logic variable, iterate through the array. In
the loop create a conditional to test whether the callback has any elements 
that are true. If any elements in the call back are true, set the some logic
variable to true.

After you have iterated through the entire array using myEach() or forEach(), 
then return the some logic variable. 

*/


Array.prototype.mySome = function (callback) {
  let some = false;

  this.myEach(el => {
    if (callback(el)) some = true;
  });

  return some;
};
console.log([1, 2, 3, 4].mySome(e => e % 2 === 0));