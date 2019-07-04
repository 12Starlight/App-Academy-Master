/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function magicCipher(sentence, cipher){
  // var newStr = '';
  var decoded = '';

  for (var i = 0; i < sentence.length; i += 1) {
    var char = sentence[i];

    if (cipher[char] === undefined) {
      // if char is not a key in the cipher object
      // newStr += char;
      decoded += char;
    } else {
      // else char is a key in the cipher object
      // newStr += cipher[char];
      decoded += cipher[char];
    }

  }

  // return newStr;
  return decoded;
}

console.log(magicCipher("add me on facebook" , { a : "c", d : "q"})); // => "cqq me on fccebook"
console.log(magicCipher("where are you?" , { v : "l", '?' : "!"})); // => "where are you!"
console.log(magicCipher("twmce" , { m : "n", t : "d", w : "a"})); // => "dance"

/*
Notes

> var cipher = {a: 'c'};
undefined
> cipher
{ a: 'c' }
> cipher['a'];
'c'
> cipher['b'];
undefined

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
