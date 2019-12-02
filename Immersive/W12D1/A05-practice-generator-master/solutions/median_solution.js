// Write an `Array.prototype.median` method that returns the median of elements
// in an array. If the length is even, return the average of the middle two 
// elements.
//
// Median: denoting or relating to a value or quantity lying at the midpoint of 
// a frequency distribution of observed values or quantities, such that there 
// is an equal probability of falling above or below it.

/*
Create a conditional to determine, if the array.length is zero. If it is, we 
want to return null. Next we want to create a sorted variable and set that to
the array using 'this' and .sort() which sorts the array.
  const sorted = this.sort()

After we have a sorted array and saved it to a sorted variable, then we want to
create a mid variable and set it to the length of the array, divided by 2. 

Once we have all our variables, we simply want to check if the array.length is 
even or odd. If it is odd, we want to simply just return the element at the 
sorted array's index using the mid variable as the index value. 

If it is even, we want to return the same element using the mid variable as an
index and also, the element before that by subtracting 1 from the mid. After we
have found both elements we want to add them together and devide by 2 to get 
the average. 

Once we have the average, we want to return it. 

*/


Array.prototype.median = function () {
  // if (this.length === 0) return null; // same thing as (!this.length)
  if (!this.length) return null; // means length is 0
  const sorted = this.sort();
  const mid = Math.floor(this.length / 2);

  if (this.length % 2 !== 0) {
    return sorted[mid];
  } else {
    return (sorted[mid] + sorted[mid - 1]) / 2;
  }
};
