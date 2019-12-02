// Back in the good old days, you used to be able to write a darn near
// uncrackable code by simply taking each letter of a message and incrementing 
// it by a fixed number, so "abc" by 2 would look like "cde", wrapping around 
// back to "a" when you pass "z".
//
// Write a function, `caesarCipher(str, shift)` that will take a message and an
// increment amount and outputs the encoded message. Assume lowercase and no 
// punctuation. Preserve spaces.
//
// The indexOf() method returns the first index at which a given element can be 
// found in the array, or -1 if it is not present.
// 
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// Examples: 
// caesarCipher(“abc”, 2) => “cde”
// caesarCipher(“xyz”, 1) => “yza"

/* 
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1


Create and alphabet and split it into an array on the character. Then create a
and encoded variable to pass the new characters which will create a new encoded
sentence. Set this to an empty string. Then iterate through the string 
parameter.

Set the conditional to test whether the element is an empty space. If it is 
then we want to add that space to the encoded variable and continue. 

If the conditional is not hit, then we want to look in the alphabet for the 
index value of the element. After we want to add that index value to the shift
parameter % the length of the alphabet in order to offset any differences 
between the length of the string and the length of the alphabet. Then save this 
to a variable called shifted.

Last we want to find the element of the new shifted index in the alphabet by
using the shifted variable as the index value in the alphabet array. Finally we 
want to concat that element to the encoded variable. 

Once we have iterated through all the elements, we want to exit the loop and 
return the encoded array pointer. 


Note: += can NOT be used on a const variable, it counts as a reasignment 

*/
function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let encoded = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      encoded += ' ';
      continue;
    }

    // const offset = (alphabet.indexOf(str[i]) + shift) % 26;
    const offset = (alphabet.indexOf(str[i]) + shift) % alphabet.length;
    encoded += alphabet[offset];
  }

  return encoded;
};
// console.log(caesarCipher('abc', 2)); // => “cde”
// console.log(caesarCipher('xyz', 1)); // => “yza"