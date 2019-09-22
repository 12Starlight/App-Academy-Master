// Write a `String.prototype.mySlice(startIdx, endIdx)` method. It should take
// a start index and an (optional) end index and return a new string. 
//
// **Do NOT use the built-in `String.prototype.slice`, `String.prototype.substr`,
// or `String.prototype.substring` methods in your implementation.** 
// 
// ex. 
// `abcde`.mySlice(2) => `cde`
// `abcde`.mySlice(1, 3) => `bc`
String.prototype.mySlice = function(startIdx, endIdx) {
  let slice = "";

  if (typeof endIdx === 'undefined') {
    endIdx = this.length;
  }

  for (let i = startIdx; i < endIdx && i < this.length; i++) {
    slice += this[i];
  }
  return slice;
};

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. 
//
// **Do NOT use the built-in `Array.prototype.forEach` method in your 
// implementation.**
Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. 
// 
// **Do NOT call in the built-in `Array.prototype.reduce` or 
// `Array.prototype.forEach` methods in your implementation.**
Array.prototype.myReduce = function (callback, acc) {
  const array = this.slice();
  if (typeof acc === 'undefined') {
    acc = array.shift();
  }

  array.myEach(el => {
    acc = callback(acc, el);
  });

  return acc;
};

// Write an `Array.prototype.quickSort(callback)` method that quick sorts an  
// array. It should take an optional callback that compares two elements, 
// returning -1 if the first element should appear before the second, 0 if they 
// are equal, and 1 if the first element should appear after the second. 
//
// **Do NOT call the built-in `Array.prototype.sort` method in your 
// implementation.**
//
// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the 
// remaining elements on to the appropriate side of the pivot. Recursively quick 
// sort each side of the array until a base case is reached. 
Array.prototype.quickSort = function (comparator) {
  if (this.length <= 1) return this;

  if (typeof comparator !== "function") {
    comparator = (x, y) => {
      if (x === y) {
        return 0;
      } else if (x < y) {
        return -1;
      } else {
        return 1;
      }
    };
  }

  const pivot = this[0];
  const left = [];
  const right = [];

  for (let i = 1; i < this.length; i++) {
    if (comparator(this[i], pivot) === -1) {
      left.push(this[i]);
    } else {
      right.push(this[i]);
    }
  }

  return left.quickSort(comparator).
    concat([pivot]).
    concat(right.quickSort(comparator));
};

// Write a function `sumNPrimes(n)`, that return the sum of the first `n` prime
// numbers. You may wish to use an `isPrime(num)` helper function.
function sumNPrimes (n) {
  let i = 2; // 2 is the first prime number, so we start there instead of 0
  let count = 0;
  let sum = 0;

  while (count < n) {
    if (isPrime(i)) {
      count += 1;
      sum += i;
    }
    i += 1;
  }

  return sum;
}

const isPrime = (num) => {
  if (num <= 1) { return false; }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// Write a `Function.prototype.myBind(context)` method. It should return a copy 
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind time and call time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.
Function.prototype.myBind = function (context, ...bindArgs) {
  const that = this;
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**
Function.prototype.inherits = function(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.
Function.prototype.myCurry = function(numArgs) {
  const args = [];
  const fn = this;

  return function _myCurry(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _myCurry;
    }
  }
}
