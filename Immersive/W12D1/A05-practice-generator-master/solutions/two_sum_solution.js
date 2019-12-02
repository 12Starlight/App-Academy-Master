// Write an `Array.prototype.twoSum` method, that finds all pairs of positions
// where the elements at those positions sum to zero.

// NB: ordering matters. Each pair must be sorted with the smaller index
// before bigger index. The array of pairs must be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

/*
Create a pairs array variable. Then loop through the array using 'this' and 
make sure to set it to this.length - 1 to account for the this[i + 1] iteration
later on.

Create another loop and set j equal to i + 1. Then make your j < this.length as 
you normally would. Next create a conditional. This is done to make sure we do
not repeat any pairs. 

In your conditional, test wheather this[i] + this[j] === 0. If it does, then 
push [i, j] (inside an array) into the pairs array variable we created earlier.

Once you have iterated through all the elements in the array, return the pairs
array pointer variable which returns all the index postions that sum to zero 
without repeating any pairs. 

*/


Array.prototype.twoSum = function () {
  const pairs = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) pairs.push([i, j]);
    }
  }

  return pairs;
};
console.log([1, 2, 3, 4, 5, -4, -2, -1, -8].twoSum());