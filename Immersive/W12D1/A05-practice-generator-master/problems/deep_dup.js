// Write a function, `deepDup(arr)`, that will perform a "deep" duplication of the
// array and any interior arrays. A deep duplication means that the array itself,
// as well as any nested arrays (no matter how deeply nested) are duped and are
// completely different objects in memory than those in the original array.
function deepDup(arr) {
  return arr.map(e => e instanceof Array ? deepDup(e) : e)
};
console.log(deepDup([{}, [{ color: "yellow" }, 2, "coders rule!"]]));