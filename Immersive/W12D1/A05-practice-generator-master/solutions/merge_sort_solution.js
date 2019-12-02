// Write an `Array.prototype.mergeSort` method that merge sorts an array. It
// should take an optional callback that compares two elements, returning -1 if 
// the first element should appear before the second, 0 if they are equal, and 1 
// if the first element should appear after the second. Define and use a helper 
// method, `merge(left, right, comparator)`, to merge the halves. Make sure that 
// `merge` is defined on the window. Do NOT call the built-in 
// `Array.prototype.sort` method in your implementation.
//
// A switch is any control which presents two mutually exclusive options or 
// states. Switches are also used to select items within lists.
// 
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.

/*
Create a conditional to determine when the length of the array is down to the 
last element which then, we want to return to return the stack causing each 
return to sort the array. Next determine if mergeSort has a callback passed 
into it as an argument. 

Next we want to create a callback which determines, if an element is greater 
than the next element, which means it needs to be sorted. The following 
descirbes the callback:
  1 = left > right (needs to be sorted)
  0 = left === right (nothing needs to be done)
  -1 = left < right (nothing needs to be done)

Once the conditional has been set and the callback has been built, we want to 
create a midpoint variable and set it to the Math.floor version of the length
of the array divided by 2.

After we want to create a left side sortedLeft variable and a right side 
sortedRight variable. 

If is the left side, we want to set it to the array 
sliced up to the midpoint and return the mergeSort(func) to repeat the process
until the entire left side only has one or none of the elements in it. 

If it is the right side, we want to set it to the array sliced FROM the 
midpoint which will return an array of elements only from the midpoint on and
after call mergeSort(func) in order to continue doing this until the right side
only has one or none elements.

Lastly, we want to return a helper function merge and pass in the parameter
variables (sortedLeft, sortedRight, func)


To build the helper function merge(left, right, comparator):

First we want to create a merged variable and set it to a blank array. Then we
want to loop through the left side and the right side as long as the left and 
right side arrays have elements in it. 

  Array.prototype.shift(): The shift() method removes the first element from an 
  array and returns that removed element. This method changes the length of the 
  array.

Next we want to create a switch statment and pass in the comparitor callback we
created in the beginning which passes in the first element of the left and the 
first element of the right side.

Inside the switch statement we want three cases: case -1: case 0: case 1: To
mimic the comparitor callback we made. For cases -1 and 0, we want to shift off
the first element off the left side, then push this element into our merged 
variable we created earlier, and after break out of the switch. 

If it is case 1: We want to shift off the right side and push the returned 
element into the merged array. After we want to break out of the switch.

Once all the elements have been removed from the left and right, then pushed 
into the merged array variable, we want to concat the left and the right 
together and reset the merged array variable to iteself. 
  merged = merged.concat(left, right)

Lastly, we want to return the merged array variable. 

*/


Array.prototype.mergeSort = function (func) {
  if (this.length <= 1) return this;

  if (!func) func = (left,  right) => {
    return left < right ? -1 : left > right ? 1 : 0;
  };

  const midpoint = Math.floor(this.length / 2);
  const sortedLeft = this.slice(0, midpoint).mergeSort(func); // .slice(start, end (not included))
  const sortedRight = this.slice(midpoint).mergeSort(func);
  return merge(sortedLeft, sortedRight, func);
};

function merge (left, right, comparator) {
  let merged = [];

  while (left.length && right.length) {
    switch(comparator(left[0], right[0])) {
      case -1:
        merged.push(left.shift());
        break;
      case 0:
        merged.push(left.shift());
        break;
      case 1:
        merged.push(right.shift());
        break;
    }
  }

  merged = merged.concat(left, right);
  return merged;
}
console.log([1, 5, 2, 9, 7].mergeSort());