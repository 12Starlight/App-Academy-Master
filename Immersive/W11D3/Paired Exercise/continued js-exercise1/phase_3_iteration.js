// arrays to work with
const ARR = [1, 2, 3];


// Build Method Array#BubbleSort
Array.prototype.bubblesort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < (this.length - 1); i += 1) {
      if (this[i] > this[i + 1]) {
        // a crafty bit of array destructuring to avoid a temp variable
        this[i], this[i + 1] = [this[i + 1], this[i]];
        sorted = false; 
      }
    }
  }

  return this;
};
console.log(ARR.bubblesort());


// Build Method String#substrings
/*
The slice() method returns a shallow copy of a portion of an array into a new 
array object selected from begin to end (end not included) where begin and end 
represent the index of items in that array. The original array will not be modified.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

String.prototype.substrings = function() {
  let sub = [];

  for (let start = 0; start < this.length; start += 1) {
    for (let end = start + 1; end <= this.length; end += 1) {
      sub.push(this.slice(start, end));
    }
  }

  return sub; 
};
console.log("abc".substrings());
