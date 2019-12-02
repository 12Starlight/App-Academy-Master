// Write a recursive function `recSum(numArr)` that returns the sum of all
// elements in an array. Assume all elements are numbers.

/*
The Array.prototype.splice() method changes the contents of an array by removing
or replacing existing elements and or adding new elements.

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']


Start:

The index at which to start changing the array. If greater than the length of 
the array, start will be set to the length of the array. If negative, it will 
begin that many elements from the end of the array (with origin -1, meaning -n 
is the index of the nth last element and is therefore equivalent to the index 
of array.length - n). If the absolute value of start is greater than the length 
of the array, it will begin from index 0.

DeleteCount (Optional):

An integer indicating the number of elements in the array to remove from start.
If deleteCount is omitted, or if its value is equal to or larger than array.
length - start (that is, if it is equal to or greater than the number of 
elements left in the array, starting at start), then all the elements from 
start to the end of the array will be deleted.

If deleteCount is 0 or negative, no elements are removed. In this case, you 
should specify at least one new element (see below).


item1, item2, ... (Optional):

The elements to add to the array, beginning from start. If you do not specify 
any elements, splice() will only remove elements from the array.


Create a function that passes in a nums array parameter variable. Then create a
conditional to check, if the length of the array is 0. If it is, return 0. This
is done for the reason that an array of 0 length will not have any elements, 
thus will have a sum of 0.

Next we want to return the first element of the array using braket notation and
then call our recSum() funciton recursively to repeat the process and passing in
only the rest of the element in the array using .splice(1) which drops the first
element and returns the rest of the array. 


Note: .splice(1) kinda works like .drop(1) in ruby in that it drops the first 
element and returns the rest of the array.

*/


function recSum(nums) {
  if (!nums.length) return 0;
  return nums[0] + recSum(nums.splice(1));
};
// console.log(recSum([9, 4, 5, 6, 7, 7]));