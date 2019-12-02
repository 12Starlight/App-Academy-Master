// Back in the good old days, you used to be able to write a darn near
// uncrackable code by simply taking each letter of a message and incrementing 
// it by a fixed number, so "abc" by 2 would look like "cde", wrapping around 
// back to "a" when you pass "z".
//
// Write a function, `caesarCipher(str, shift)` that will take a message and an
// increment amount and outputs the encoded message. Assume lowercase and no 
// punctuation. Preserve spaces.
// 
// 
// 
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// Examples: 
// caesarCipher(“abc”, 2) => “cde”
// caesarCipher(“xyz”, 1) => “yza"
function caesarCipher(str, shift) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let encoded = '';

  str.split('').forEach((e, i) => {
    if (e === ' ') {
      encoded += ' '
    };

    const index = alpha.indexOf(e);
    const shifted = (index + shift) % alpha.length;
    encoded += alpha[shifted];
  });

  return encoded;
};
console.log(caesarCipher('abc', 2)); // => “cde”
console.log(caesarCipher('xyz', 1)); // => “yza"