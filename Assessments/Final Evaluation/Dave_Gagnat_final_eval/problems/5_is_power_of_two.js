/**************************************************************************************
Write a function `isPowerOfTwo(num)` that takes in a number and returns a boolean indicating
whether or not the number is a power of two.

The powers of two are 1, 2, 4, 8, 16, 32, 64, ... etc

Examples:

isPowerOfTwo(1);  // => true
isPowerOfTwo(32); // => true
isPowerOfTwo(12); // => false
isPowerOfTwo(33); // => false
isPowerOfTwo(-8); // => false

Difficulty: Medium
*************************************************************************************/

/*
My Solution

// Build helper function isPower(num, exp)
// Creates an

function isPowerOfTwo(num) {
  for (var i = 2; i < num; i += 1) {

    if ((i + 1) % i === 2) {
      return true;
    } else if (i === 1) {
      return true;
    }
  }

  return false;
}

*/

// First Solution
function isPowerOfTwo(num) {
  for (var i = num; i >= 1; i /= 2) {
      if (i === 1) {
        return true;
      }
    }

  return false;
}



// Second Solution
// function isPowerOfTwo(num) {
//   while (num >= 1) {
//     if (num === 1) {
//       return true;
//     }
//
//     num /= 2;
//   }
//
//   false;
// }

/*
Notes

> 2 * 2 * 2 * 2
16
> 2 * 2 * 2 * 2 * 2
32
> 2 * 2 * 2 * 2 * 2 * 2
64
> 2 * 2 * 2 * 2 * 2 * 2 * 2
128

> var num = 64
undefined
> num
64
> num /= 2
32
> num /= 2
16
> num /= 2
8
> num /= 2
4
> num /= 2
2
> num /= 2
1

> var num = 8
undefined
> num
8
> num /= 2
4
> num /= 2
2
> num /= 2
1

> var num = 9
undefined
> num /= 2
4.5
> num /= 2
2.25
> num /= 2
1.125
> num /= 2
0.5625

If we use !== instead of >= then our number will never reach 1 and we
will be stuck in an infinate loop and that is why we want to set it to
>=, so that when it falls below 1, we stop our loop

*/

console.log(isPowerOfTwo(1));  // => true
console.log(isPowerOfTwo(32)); // => true
console.log(isPowerOfTwo(12)); // => false
console.log(isPowerOfTwo(33)); // => false
console.log(isPowerOfTwo(-8)); // => false

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = isPowerOfTwo;
