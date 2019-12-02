// Write a function, `deepDup(arr)`, that will perform a "deep" duplication of the
// array and any interior arrays. A deep duplication means that the array itself,
// as well as any nested arrays (no matter how deeply nested) are duped and are
// completely different objects in memory than those in the original array.

// The map() method creates a new array with the results of calling a provided 
// function on every element in the calling array.

/* 
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


Since map builds a new array, using it when you aren't using the returned array 
is an anti-pattern; use forEach or for-of instead. Signs you shouldn't be using 
map: A) You're not using the array it returns, and/or B) You're not returning a 
value from the callback.

callback is invoked with three arguments: the value of the element, the index 
of the element, and the Array object being traversed.

If a thisArg parameter is provided to map, it will be used as callback's this 
value. Otherwise, the value undefined will be used as its this value. The this 
value ultimately observable by callback is determined according to the usual 
rules for determining the this seen by a function.

map does not mutate the array on which it is called (although callback, if 
invoked, may do so).


We want to use map because it returns a new array and does not alter the 
original array. In the map function which we called on the arr parameter, we
want to first check, if the element is an array.

This is done to make sure that we are in fact including arrays in our duplicate
of arr. If it is an array then we want to go deeper into the array by calling
deepDup(el) again which creates another array. We keep doing this until their 
is no more arrays, then just add the single elment to the mapped array created 
by map.

Once we have iterated through every element in the array, we hit our return and
call back the stack returning each element at a time, including the arrays we
created each time we called deepDup(el) and went deeper into an embedded array. 

*/

function deepDup(arr) {
  return arr.map(el => el instanceof Array ? deepDup(el) : el);
};
// console.log(deepDup([{}, [{ color: "yellow" }, 2, "coders rule!"]]));