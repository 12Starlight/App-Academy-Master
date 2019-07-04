/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

/*
My Working Solution

function isPalindrome(sentence) {
  var newSen = sentence.split(' ').join('');

  for (var i = 0; i < newSen.length; i += 1) {
    var firstChar = newSen[i];
    var lastChar = newSen[newSen.length - 1 - i];

    if (firstChar !== lastChar) {
      return false;
    }
  }

  return true;
}

*/

function isPalindrome(sentence) {
  var newSen = sentence.split(' ').join('');
  var reversed = '';

  for (var i = newSen.length -1; i >= 0; i -= 1) {
    var char = newSen[i];
    reversed += char;
  }

  return reversed === newSen;
}


console.log(isPalindrome('rats live on no evil star')); // => true
console.log(isPalindrome('stella won no wallets')); // => true
console.log(isPalindrome('racecar')); // => true
console.log(isPalindrome('hello world')); // => false

/*
Notes

> var sen = 'Hello World! how are you?'
undefined
> sen.split(' ')
[ 'Hello', 'World!', 'how', 'are', 'you?' ]
> sen.split(' ').join('')
'HelloWorld!howareyou?'

*/

/*
Key Takeaways
  * Key thing to notice is to remove any spaces from the start and
    we got this information from just looking at the second example
  * When it comes to answering any questions on an assessment or an
    interview, be sure to understand any nuances in the examples
    given 

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
