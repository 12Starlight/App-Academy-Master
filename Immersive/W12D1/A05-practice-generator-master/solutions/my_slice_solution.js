// Write a `String.prototype.mySlice(startIdx, endIdx)` method. It should take
// a start index and an (optional) end index and return a new string. Do NOT 
// use the built-in string methods `slice`, `substr`, or `substring`. 
// ex. 
// `abcde`.mySlice(2) => `cde`
// `abcde`.mySlice(1, 3) => `bc`

/*
Create a function that takes in a start and end parmeter. Then create a slice 
string variable and set it to an empty string.

After you have created your slice string variable. Create a conditional to test
if the optional end parameter is 'undefined' using 'typeof' === 'undefined'. If
the end parameter is 'undefined' set the end parameter variable to the length
of the string.

Once you have determined the end parameter variabe, iterate through the string
setting i equal to the start parameter variable and iterating up to the end 
parameter variable and making sure that i is less than the length of the string.
  i < end && i < this.length 

On each iteration, concat each element using '+=' and 'this' to the slice 
string variable we created earlier. 

After you have iterated through the entire string, return the slice string 
variable. 

*/


String.prototype.mySlice = function(start, end) {
  let slice = "";

  if (typeof end === 'undefined') {
    end = this.length;
  }

  for (let i = start; i < end && i < this.length; i++) {
    slice += this[i];
  }
  return slice;
};
// console.log(`abcde`.mySlice(2)) // => `cde`
// console.log(`abcde`.mySlice(1, 3)) // => `bc`