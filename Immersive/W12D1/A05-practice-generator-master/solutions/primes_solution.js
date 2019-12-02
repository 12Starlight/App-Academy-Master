// Write a function `primes(num)`, which returns an array of the first "num" primes.
// You may wish to use an `isPrime(num)` helper function.

/*
You will need to create a helper function isPrime(num)

function isPrime (num) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) return false;
  }

  return true;
};


Create a primes function that takes in a count parameter. Then create a 
primeNums array variable and set it to an empty array. Then create an i 
variable and set it to 2, which is the first prime number. 

After you have created your primeNums array variable and i variable. Then 
create a while loop and set the conditional to check, if the primeNums array
variable length is less than the count parameter. 

If the primeNums array variable length is less than the count parameter, then 
create another conditional to test the i iteration variable for being prime 
using the 'isPrime(num)' helper function, you created ealier. Then increase
the i iteration variable by 1.

After you have iterated through the i iteration variables until the primeNums
array varibale length is less than the count parameter, return the primeNums
array pointer. 

*/


function primes(count) {
  const primeNums = [];
  let i = 2;
  
  while (primeNums.length < count) {
    if (isPrime(i)) primeNums.push(i);
    i += 1;
  }
  
  return primeNums;
}

function isPrime (num) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) return false;
  }

  return true;
};
console.log(primes(3));