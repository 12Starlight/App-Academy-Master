// Write a function, `factors(num)`, that returns an array containing the 
// factors of a number in ascending order.
// 
// The Array.from() method creates a new, shallow-copied Array instance from 
// an array-like or iterable object.

/*
Create an array that is fully formed using Array.from(Array(num)). The 
difference between using Array.from(Array(num)) and just using Array(num) has 
to do with map().

Map can only work when an array has a length and each slot has either an
element in it or is undefined. Map will skip any elements that do not meet this
specific criteria.

Now that we have met this criteria, we just simply want to push the index, 
starting at 1 into the Array slots until we reach the num parameter in our 
function. 

Last we want to filter() out each element that is a factor of the num parameter
that we passed into our function earlier using a call back: 
  (el => num % el === 0)

We want to return the Array variable facts with calling the Array method
.filter() on it: 
  facts.filter() 

*/

function factors(num) {
  // Generates an array of numbers from 1 up to num
  const facts = Array.from(Array(num)).map( (_, idx) => idx + 1);
  // Filter array for only those numbers which are factors
  return facts.filter(el => num % el === 0);
};
// console.log(factors(9));
