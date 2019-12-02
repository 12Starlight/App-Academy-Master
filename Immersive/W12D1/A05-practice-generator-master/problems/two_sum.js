// Write an `Array.prototype.twoSum` method, that finds all pairs of positions 
// where the elements at those positions sum to zero.

// NB: ordering matters. Each pair must be sorted with the smaller index
// before bigger index. The array of pairs must be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)
Array.prototype.twoSum = function () {
  let pairs = [];

  for (let i = 0; i < this.length - 1; i += 1) {
    for (let j = i + 1; j < this.length; j += 1) {
      if (this[i] + this[j] === 0) pairs.push([i, j]);
    }
  }

  return pairs;
};
console.log([1, 2, 3, 4, 5, -4, -2, -1, -8].twoSum());