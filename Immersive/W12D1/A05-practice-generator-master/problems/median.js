// Write an `Array.prototype.median` method that returns the median of elements
// in an array. If the length is even, return the average of the middle two 
// elements.
Array.prototype.median = function () {
  if (!this.length) return null;
  const sorted = this.sort();
  const mid = Math.floor(this.length / 2);

  if (this.length % 2 !== 0) {
    return sorted[mid];
  } else {
    console.log(sorted[mid]);
    return (sorted[mid] + sorted[mid - 1]) / 2;
  }
};
console.log([12, 5, 3, 45].median());
