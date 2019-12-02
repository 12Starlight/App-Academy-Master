// Write an `Array.prototype.myEvery(callback)` method that returns true
// if the callback returns true for every element in the array, and otherwise 
// returns false. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.every` or `Array.prototype.forEach` 
// methods.

/*
Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

The every() method tests whether all elements in the array pass the test 
implemented by the provided function. It returns a Boolean value.


We are creating a function that takes in a callback. This is then followed up
by iterating through every element in the array and testing whether each 
element in the array is true for the callback. If it it is true, we return true
otherwise we return false. 


Note: We want to use the myEach() function we created earlier. This method 
returns true for any condition put on an empty array. 

*/


Array.prototype.myEvery = function (callback) {
  let every = true
  
  this.myEach(el => {
    if (!callback(el)) every = false;
  });

  return every;
};
// console.log([12, 4].myEvery(e => e % 2 === 0));