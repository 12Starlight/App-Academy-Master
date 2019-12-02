// Write an `Array.prototype.dups` method that will return an object containing
// the indices of all duplicate elements. The keys are the duplicate elements; 
// the values are arrays of their indices in ascending order
//
// The filter() method creates a new array with all elements that pass the test 
// implemented by the provided function.
// 
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }

/*
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


Create two objects, one for counting and the other for the object that will 
only have the duplicate elements.

Use this and iterate through the Array setting each key of count to the element 
in the array or a blank array, if no key is present. Then for every key that 
exists, push the idx into the value array for that key.

Once you have iterated through the entire array and built a counter object, use
Object.keys(count) use .filter and pass in a callback function to test the 
length of each value array for each key in the count object. Then save it to a
variable.
  (el => count[el].length > 1)

Use that variable to iterate through the array of keys that have value arrays 
with a length greater than 1. After set the object that will only have 
duplicate elements equal to the count and pass in the element as a key from the 
keys that have multiple elements in their value arrays.

After you have built the object that wlll only have value arrays greater than 1,
return thata object.

*/

Array.prototype.dups = function() {
  const count = {};
  const dups = {};

  this.forEach( (el, idx) => {
    count[el] = count[el] || [];
    count[el].push(idx);
  });

  const keys = Object.keys(count).filter(el => count[el].length > 1);
  keys.forEach( (key) => {
    dups[key] = count[key];
  });

  return dups;
};
console.log([1, 3, 4, 3, 0, 3, 0].dups()); // => { 3: [1, 3, 5], 0: [4, 6] }