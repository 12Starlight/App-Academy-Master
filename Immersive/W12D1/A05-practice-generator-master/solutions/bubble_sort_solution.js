// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in Array.prototype.sort method in your implementation. Also, do NOT
// modify the original array.
//
// The typeof operator returns a string indicating the type of the unevaluated 
// operand.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.

/* 
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof declaredButUndefinedVariable);
// expected output: "undefined";


Type	      Result
Undefined	    "undefined"
Null	        "object" (see below)
Boolean	      "boolean"
Number      	"number"
BigInt      	"bigint"
String      	"string"
Symbol (new in ECMAScript 2015)	"symbol"
Host object (provided by the JS environment)	Implementation-dependent
Function object (implements [[Call]] in ECMA-262 terms)	"function" <---
Any other object	"object"


Check what type of operand the callback is, then if the callback is not a 
"function," we want to set the callback parameter to the defaultCallback() 
return value.

We then make a shallow copy of the array and create a sorted logic variable, 
then set it to false because the array is not sorted yet.

We then use a while loop and set the conditional to not sorted. So, while the
sorted logic variable is false, we want to iterate through the array. However, 
we set the sorted logic variable to immeditately set to true before iterating. 
If the array is sorted, then we will not hit the conditional inside the for 
loop. 

The iteration is going to call for resultArr[i + 1], so we want to make sure we
iterate only up to the element before the last element. 

Next we create a conditional to check if the callback(resultArr[i], 
resultArr[i + 1]) is equal to 1 which means the array is not sorted. So, we set
the sorted logic variable to false.

Last we use JS syntax to save ourselves time creating a temp variable in order 
to swap the elements when they are not sorted. We use:
  [resultArr[i], result[i + 1]] = [resultArr[i + 1], resultArr[i]];

Then we return the resultArr, after the while loop passes the condition that
the logic variable is now true because we did not hit the conditional statement
in the iteration. 


Note: You can not create a copy of the elements, it will not sort the original 
resultArr

*/


const defaultCallback = (num1, num2) => {
  if (num1 < num2) {
    return -1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return 1; // sorted
  }
};

Array.prototype.bubbleSort = function (callback) {
  if (typeof callback !== "function") {
    callback = defaultCallback;
  }

  let resultArr = this.slice();
  let sorted = false;
  while (!sorted) {
    sorted = true;
    // for (let i = 1, n = resultArr.length; i < n; i++) {
    for (let i = 0; i < resultArr.length - 1; i += 1) {
      // if (callback(resultArr[i - 1], resultArr[i]) === 1) {
      if (callback(resultArr[i], resultArr[i + 1]) === 1) {
        sorted = false;
        [resultArr[i], resultArr[i + 1]] = [resultArr[i + 1], resultArr[i]]
        // let swap = resultArr[i - 1];
        // resultArr[i - 1] = resultArr[i]
        // resultArr[i] = swap;
      }
    }
  }

  return resultArr;
}
// console.log([1, 0, 9, 3, 8, 2, 5, 7, 0, 2, 3, 4, 9, 5, 7, 8].bubbleSort(defaultCallback));
