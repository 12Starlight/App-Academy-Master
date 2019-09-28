// Write a function, `longestSymmetricSubstring(string)`, that returns the
// longest substring that is the same forwards and in reverse (for example,
// "abba"). If two substrings are the same length, take the first one.
function longestSymmetricSubstring(string) {
  let symmetric = [];

  for (let i = 0; i < string.length; i += 1) {
    for (let j = 2; j < string.length - i; j += 1) {
      const substr = string.slice(i, i + j);
      const reversed = substr.split('').reverse().join('');

      if (substr === reversed) symmetric.push(substr);
    }
  }


  return symmetric.join('');
};


// Write an Array function, myEach(callback), that passes each element to
// `callback` and does not modify the original array. Do NOT call the built-in
// Array#forEach method in your implementation.
Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i += 1) {
    cb(this[i])
  }
};

// Write a an Array method, myMap, that takes a callback and returns a new array
// containing the result of the callback for each element in the array. Use the
// Array#myEach method you defined above. Do NOT call the built-in Array#forEach
// or Array#map methods in your implementation.
Array.prototype.myMap = function (cb) {
  let mapped = [];

  this.myEach(e => {
    mapped.push(cb(e));
  });

  return mapped;
};


// Write a function `pairMatch(array, callback)`. It should return all pairs
// of indices ([i, j]) for which `callback(array[i], array[j])` returns true.

// NB: Keep in mind that the order of the arguments to the callback may matter.
// e.g., callback = function(a, b) { return a < b }
function pairMatch(array, cb) {
  let paired = [];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (i !== j && cb(array[i], array[j])) paired.push([i, j]);
    }
  }

  return paired;
};


// Write a function, `binarySearch(sortedArray, target)`, that returns the
// index of `target` in `sortedArray`, or -1 if it is not found.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.
function binarySearch(sorted, target) {
  if (!sorted.length) return -1;
  let midpoint = Math.floor(sorted.length / 2);

  if (sorted[midpoint] > target) {
    return binarySearch(sorted.slice(0, midpoint), target);
  } else if (sorted[midpoint] < target) {
    let subResult = binarySearch(sorted.slice(midpoint + 1), target);

    if (subResult >= 0) {
      subResult += midpoint + 1
      // return -1;
    } else {
      return -1;
    }
    // if (subResult === -1) return -1;  


  } else {
    return midpoint;
  }
};


// write a Function method, myBind(context). It should return a copy of the
// original function, where `this` is set to `context`.
Function.prototype.myBind = function (context, ...bindArgs) {
  let that = this;

  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  }
}


// write a method, `inherits(ChildClass, ParentClass)`. It should extend the
// methods of `ParentClass.prototype` to `ChildClass.prototype`.

// Function.prototype.inherits = function (Parent) {
//   function Surrogate() {};
//   Surrogate.prototype = Parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// }

function inherits(Child, Parent) {
  function Surrogate() {};
  Surrogate.prototype = Parent.prototype;
  Child.prototype = new Surrogate();
  Child.prototype.constructor = Child; 
};


// write a method, `myCurry(fn, object, numArgs)`, that curries the
// function. Remember that a curried function is invoked with one argument at a
// time. For example, the curried form of `sum(1, 2, 3)` would be written as
// `curriedSum(1)(2)(3)`. After `numArgs` have been passed in, invoke the
// original `fn` with the accumulated arguments, using `object` as the
// context.
function myCurry(fn, object, numArgs) {
  let nums = [];
  func = fn.bind(object);

  return function _myCurry (e) {
    nums.push(e);

    if (nums.length < numArgs) {
      return _myCurry;
    } else {
      return func(...nums);
    }
  }
}

