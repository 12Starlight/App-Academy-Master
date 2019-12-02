// Write an `Array.prototype.myJoin(separator)` method, which joins the elements 
// of an array into a string. If an argument is provided to `myJoin`, use that
// between each element. Otherwise, use an empty string.
// Do NOT call the built-in `Array.prototype.join` method.
// ex.
// [1, 2, 3].myJoin() => '123'
// [1, 2, 3].myJoin('$') => '1$2$3'

/*
Create a function that takes in a separator parameter with a default value of 
an empty string. This basically takes an array and turns it into a string with
the separator stuck inbetween each element in the array.

Create an empty string variable and set it to an empty string. Then iterate 
through the array using forEach() and pass in the element and index. At each
iteration concat the element to the newString variable using '+='. 

Next create a conditional, that tests whether the index is at the end of the 
array on that iteration. If it is not, then concatenate the separator to the
newString variable at each iteration.

Lastly, after you have iterated through all the elements, return the newString.


Note: You are going to want to use string intropolation `${element}`, but it is
not absolutely necessary.

*/


Array.prototype.myJoin = function (separator = '') {
  let newString = '';

  this.forEach( (el, idx) => {
    newString += `${el}`;
    if (idx < this.length - 1) newString += separator;
  });

  return newString;
};
// console.log([1, 2, 3, 4].myJoin());