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

// Build helper function isPower(num, exp)
// Creates an

function isPowerOfTwo(num) {
  for (var i = 2; i < num; i += 1) {

    if ((i + 1) % i === 2) { // This will always return 1, no matter what -BL
      return true;
    } else if (i === 1) {
      return true;
    }
  }

  return false;
}

console.log(isPowerOfTwo(1));  // => true
console.log(isPowerOfTwo(32)); // => true
console.log(isPowerOfTwo(12)); // => false
console.log(isPowerOfTwo(33)); // => false
console.log(isPowerOfTwo(-8)); // => false

// What we can do here is to start i at `num` and in the for loop, decrement it by dividing
// it by 2 each time. Then inside the for loop, we'd check whether `num % 2` is equal to 0
// or not. If it doesn't, we can return false. We would also need to run the loop until 
// `i` is less than or equal to 2. This would account for 1, which is a power of 2.
// In the end, if the for loop hasn't returned false, we return true because the number 
// is a power of two. 
//
// If we run through this loop with the number 12, which is not a power of 2, we get 
// `12 % 2`, `6 % 2`, and finally `3 % 2`. Since `3 % 2` is not equal to 0, the loop would 
// return false.
//
// Running through with the number 16, which is a power of 2, we get `16 % 2`, `8 % 2`, 
// `4 % 2`, and finally `2 % 2`. Since it hasn't returned false in the loop, it'll return
// true at the very end. 

// This is just one solution; there will be other ways to approach this problem -BL

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = isPowerOfTwo;
