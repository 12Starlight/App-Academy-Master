// Write a `String.prototype.mySlice(startIdx, endIdx)` method. It should take 
// a start index and an (optional) end index and return a new string. Do NOT 
// use the built-in string methods `slice`, `substr`, or `substring`. 
// ex. 
// `abcde`.mySlice(2) => `cde`
// `abcde`.mySlice(1, 3) => `bc`
String.prototype.mySlice = function (start, end) {
  let sliced = '';
  if (!end) end = this.length;

  for (let i = start; i < end && i < this.length; i += 1) {
    sliced += this[i];
  }

  return sliced;
};
console.log(`abcde`.mySlice(2)) // => `cde`
console.log(`abcde`.mySlice(1, 3)) // => `bc`